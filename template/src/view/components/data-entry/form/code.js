const introduction = `
<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Your Name:"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Food:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.food"
          :options="foods"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
          v-model="form.checked"
          id="checkboxes-4"
          :aria-describedby="ariaDescribedby"
        >
          <b-form-checkbox value="me">Check me out</b-form-checkbox>
          <b-form-checkbox value="that">Check that out</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-button type="submit" variant="primary" class="mb-8 mr-8">Submit</b-button>
      <b-button type="reset" variant="danger" class="mb-8 mr-8">Reset</b-button>
    </b-form>

    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0 hp-p1-body">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
import { BCard, BButton, BForm, BFormGroup, BFormCheckboxGroup, BFormCheckbox, BFormSelect, BFormInput } from "bootstrap-vue";

export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        food: null,
        checked: [],
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn",
      ],
      show: true,
    };
  },
  components: {
    BCard,
    BButton,
    BForm,
    BFormGroup,
    BFormCheckboxGroup,
    BFormCheckbox,
    BFormSelect,
    BFormInput,
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
`

const inline = `
<template>
  <b-form inline>
    <label class="sr-only" for="inline-form-input-name">Name</label>
    <b-form-input
      id="inline-form-input-name"
      class="mb-2 mr-sm-2 mb-sm-0"
      placeholder="Jane Doe"
    ></b-form-input>

    <label class="sr-only" for="inline-form-input-username">Username</label>
    <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
      <b-form-input id="inline-form-input-username" placeholder="Username"></b-form-input>
    </b-input-group>

    <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0">Remember me</b-form-checkbox>

    <b-button variant="primary">Save</b-button>
  </b-form>
</template>

<script>
import { BButton, BForm, BFormGroup, BFormCheckbox, BInputGroup, BFormInput } from "bootstrap-vue";

export default {
  components: {
    BButton,
    BForm,
    BFormGroup,
    BInputGroup,
    BFormCheckbox,
    BFormInput,
  },
};
</script>
`

const text = `
<template>
  <b-form @submit.stop.prevent>
    <label for="text-password">Password</label>
    <b-form-input type="password" id="text-password" aria-describedby="password-help-block"></b-form-input>
    <b-form-text id="password-help-block">
      Your password must be 8-20 characters long, contain letters and numbers, and must not
      contain spaces, special characters, or emoji.
    </b-form-text>
  </b-form>
</template>

<script>
import { BForm, BFormText, BFormInput } from "bootstrap-vue";

export default {
  components: {
    BForm,
    BFormText,
    BFormInput,
  },
};
</script>
`

const feedback = `
<template>
  <b-form @submit.stop.prevent>
    <label for="feedback-user">User ID</label>
    <b-form-input v-model="userId" :state="validation" id="feedback-user"></b-form-input>
    <b-form-invalid-feedback :state="validation">
      Your user ID must be 5-12 characters long.
    </b-form-invalid-feedback>
    <b-form-valid-feedback :state="validation">
      Looks Good.
    </b-form-valid-feedback>
  </b-form>
</template>

<script>
import { BForm, BFormInput, BFormInvalidFeedback, BFormValidFeedback } from "bootstrap-vue";

export default {
  data() {
    return {
      userId: '',
    };
  },
  components: {
    BForm,
    BFormInvalidFeedback,
    BFormValidFeedback,
    BFormInput,
  },
  computed: {
    validation() {
      return this.userId.length > 4 && this.userId.length < 13
    }
  },
};
</script>
`

export default { introduction, inline, text, feedback }