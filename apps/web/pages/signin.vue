<template>
  <main class="flex w-screen h-screen">
    <div
      class="flex flex-col laptop:w-1/2 laptop:px-28 px-5 justify-center relative left"
    >
      <TextButton @click="navigateTo('/')" class="absolute left-16 top-10"
        ><i class="fi fi-rr-arrow-left text-2xl"></i> Back</TextButton
      >
      <TextButton class="absolute left-16 top-10" @click="navigateTo('/')"
        ><i class="fi fi-rr-arrow-left text-2xl"></i> Back</TextButton
      >

      <h2 class="text-5xl font-medium leading-tight font-heading">
        Joining dream event now
      </h2>

      <FormInput
        :context="signinForm"
        class="gap-5 mt-10"
        @save="emailPassSignin.mutate"
      >
        <TextInput
          name="email"
          placeholder="Your email address"
          pre-icon="fi fi-rr-user"
        />
        <PasswordInput
          name="password"
          placeholder="Your password"
          pre-icon="fi fi-rr-lock"
        />

        <div class="flex justify-end pr-3">
          <TextButton
            class="transition-all duration-300 hover:-translate-y-1 forgot-password-button"
            @click="navigateTo('/forgot-password')"
            >Forget password</TextButton
          >
        </div>

        <FlatButton
          class="mt-5 transition-all duration-500 hover:-translate-y-1 signin"
          type="submit"
          :disabled="emailPassSignin.pending.value"
        >
          {{ emailPassSignin.pending ? 'Signin in' : 'Signin now' }}
        </FlatButton>
      </FormInput>

      <div class="flex justify-center mt-6">
        <span>or signin using</span>
      </div>
      <div class="flex justify-center items-center gap-5 mt-8">
        <OutlineButton
          class="ring-2 ring-black google"
          @click="googleSignin.mutate()"
          ><i class="fi fi-brands-google"></i> Google</OutlineButton
        >
        <OutlineButton
          class="ring-2 ring-black github"
          @click="githubSignin.mutate()"
          ><i class="fi fi-brands-github"></i> Github</OutlineButton
        >
      </div>
    </div>

    <div
      class="hidden laptop:flex w-1/2 h-full bg-[#F0EEFF] justify-center items-center fixed inset-y-0 right-0 right"
    >
      <div
        class="flex h-16 w-16 rounded-3xl bg-white border-2 border-slate-100 absolute top-6 -left-8"
      >
        <NuxtImg
          src="/images/logo.png"
          height="100"
          width="100"
          class="object-contain"
        />
      </div>
      <div class="relative h-[512px] w-[512px]">
        <NuxtImg src="/images/manage.png" class="object" />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { useForm } from 'vee-validate'
import { object, string } from 'yup'
const { account, ID } = useAppwrite()
const {
  public: { host },
} = useRuntimeConfig()
const route = useRoute()

useSeoMeta({
  title: 'Signin',
  description: 'Start joining into a wonderful event',
})

definePageMeta({
  middleware: 'auth',
})

const signinSchema = object({
  email: string()
    .required('Please fill the email')
    .email('Opps, your email looks weird')
    .trim(),
  password: string()
    .required('Please fill the password')
    .min(8, 'The password at least must be 8 characters')
    .trim(),
})

const signinForm = useForm({
  validationSchema: signinSchema,
})

const createCookie = async () => {
  // create cookie session
  // that work for both client and server side render
  const user = await account.get()
  await useFetch('/api/auth/login', {
    method: 'POST',
    body: user,
  })

  await navigateTo('/')
}

const emailPassSignin = useMutation(async (form: any) => {
  // first we need to create an account and also check if the user
  // already exist or not, then move into create user session
  // we also send the email verification to this user
  const { email, password } = form
  account.create(ID.unique(), email, password).finally(async () => {
    await account.createVerification(`${host}`)
    await account.createEmailSession(email, password)
    await createCookie()
  })
})

const googleSignin = await useMutation(async () => {
  // start create a new session
  // with google OAuth2
  await account.createOAuth2Session(
    'google',
    `${host}/signin?method=google&status=success`,
    `${host}/signin?method=google&status=failed`,
  )
})

const githubSignin = await useMutation(async () => {
  // start create a new session
  // using github auth
  await account.createOAuth2Session(
    'github',
    `${host}/signin?method=github&status=success`,
    `${host}/signin?method=github&status=failed`,
  )
})

onMounted(() => {
  if (route.query.status === 'success') {
    createCookie()
  }
})

// animate the pages
onMounted(() => {
  gsap.from('.right', {
    opacity: 0,
    duration: 1,
  })
  gsap.from('.left', {
    y: 200,
    opacity: 0,
    duration: 0.7,
  })
})
</script>
