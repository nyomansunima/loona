<template>
  <!-- define meta tags -->
  <Head>
    <Title>Reset Password</Title>
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
        Change your password
      </h2>

      <span class="text-gray-700 mt-10"
        >Change your password with new one. Please keep this password secretly,
        you will need this password to access special feature.</span
      >

      <Form :context="form" @save="updatePassword.mutate" class="gap-5 mt-10">
        <TextInput
          name="password"
          placeholder="Your new password"
          preIcon="fi fi-rr-lock"
        />

        <PasswordInput
          name="confirmPassword"
          placeholder="Confirm your new password"
          preIcon="fi fi-rr-lock"
        />

        <FlatButton
          class="mt-5 transition-all duration-500 hover:-translate-y-1"
          type="submit"
          :disabled="updatePassword.pending.value"
        >
          {{ updatePassword.pending ? 'Change Password' : 'Updating password' }}

          <i
            v-show="updatePassword.pending.value"
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
        🎉 Nice, you’re setted to be new
      </h2>

      <span class="text-gray-700 mt-10"
        >Now your own password is new. Please login and start journey by
        signin.</span
      >

      <FlatButton @click="navigateTo('/signin')" class="mt-10"
        >Signin now</FlatButton
      >
    </div>

    <div
      class="hidden laptop:flex w-1/2 h-full bg-[#FFECE4] justify-center items-center fixed inset-y-0 right-0"
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
        <NuxtImg src="/images/illustrations/swing.png" class="object" />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate'
import { object, string } from 'yup'
const { account } = useAppwrite()
const route = useRoute()
const activeStep = ref<'input' | 'confirm'>('input')

const formSchema = object({
  password: string()
    .min(8, 'Password at least must be 8 characters')
    .required('Please fill the password'),
  confirmPassword: string()
    .min(8, 'Password at least must be 8 characters')
    .required('Please fill the password')
})
const form = useForm({
  validationSchema: formSchema
})

const updatePassword = await useMutation(
  async (formData) => {
    // sending the email to reseting
    // password to confirm
    const { password, confirmPassword } = formData
    if (password != confirmPassword) {
      throw {
        message: 'invalid-password'
      }
    }
    const userId = route.query.userId as string
    const secret = route.query.secret as string
    if (userId && secret) {
      await account.updateRecovery(userId, secret, password, confirmPassword)
    }
  },
  {
    onSuccess: () => {
      activeStep.value = 'confirm'
    },
    onError: (err) => {
      if (err.message == 'invalid-password') {
        form.setFieldError(
          'confirmPassword',
          'Opps, please insert the same password'
        )
      }
    }
  }
)
</script>
