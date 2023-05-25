<template>
  <!-- define meta tags -->
  <Head>
    <Title>Forgot Password</Title>
    <Meta
      name="description"
      content="Reset your own password with the new one"
    />
  </Head>

  <!-- content body -->
  <main class="flex w-screen h-screen">
    <div
      v-show="activeStep == 'input'"
      class="flex flex-col laptop:w-1/2 laptop:px-28 px-5 justify-center relative"
    >
      <TextButton @click="navigateTo('/signin')" class="absolute left-16 top-10"
        ><i class="fi fi-rr-arrow-left text-2xl"></i> Back</TextButton
      >

      <h2 class="text-5xl font-medium leading-tight font-heading">
        Forgot your own password ?
      </h2>

      <span class="text-gray-700 mt-10"
        >Please insert your current user email address, we will send your email
        to reset your password.</span
      >

      <Form :context="form" @save="sendResetEmail.mutate" class="gap-5 mt-10">
        <TextInput
          name="email"
          placeholder="Your email address"
          preIcon="fi fi-rr-envelope"
        />

        <FlatButton
          class="mt-5 transition-all duration-500 hover:-translate-y-1"
          type="submit"
          :disabled="sendResetEmail.pending.value"
        >
          {{ sendResetEmail.pending ? 'Reset Password' : 'Sending Email' }}

          <i
            v-show="sendResetEmail.pending.value"
            class="absolute text-lg fi fi-rr-spinner animate-spin right-5"
          ></i>
        </FlatButton>
      </Form>
    </div>

    <div
      v-show="activeStep == 'confirm'"
      class="flex flex-col laptop:w-1/2 laptop:px-28 px-5 justify-center relative"
    >
      <TextButton @click="navigateTo('/signin')" class="absolute left-16 top-10"
        ><i class="fi fi-rr-arrow-left text-2xl"></i> Back</TextButton
      >

      <h2 class="text-5xl font-medium leading-tight font-heading">
        🎉 Check your own email now
      </h2>

      <span class="text-gray-700 mt-10"
        >Please check your email address, we just send you a email that contain
        a link to reset your password. Remember this email link is valid for
        just 1 hour.</span
      >
    </div>

    <div
      class="hidden laptop:flex w-1/2 h-full bg-[#FFEDF2] justify-center items-center fixed inset-y-0 right-0"
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
        <NuxtImg src="/images/illustrations/phone.png" class="object" />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate'
import { object, string } from 'yup'
const { account } = useAppwrite()
const config = useRuntimeConfig()
const activeStep = ref<'input' | 'confirm'>('input')

const formSchema = object({
  email: string()
    .required('Please fill the email')
    .email('Opps, your email looks weird')
})
const form = useForm({
  validationSchema: formSchema
})

const sendResetEmail = await useMutation(
  async (formData) => {
    // sending the email to reseting
    // password to confirm
    const { email } = formData
    await account.createRecovery(
      email,
      `${config.public.host}/forgot-password/confirm`
    )
  },
  {
    onSuccess: () => {
      activeStep.value = 'confirm'
    }
  }
)
</script>
