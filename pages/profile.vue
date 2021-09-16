<template>
  <section class="section">
    <div class="container">
      <h2 class="title">My Profile</h2>
      <div class="content">
        <p>
          <strong>Username:</strong>
          {{ loggedInUser.username }}
        </p>
        <p>
          <strong>Email:</strong>
          {{ loggedInUser.email }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  middleware: 'auth',
  data: () => ({
    banks: [],
  }),
  computed: {
    ...mapGetters(['loggedInUser'])
  },
  methods: {
    async getBanks() {
        await this.$axios
        .get("/api/banks/")
        .then((response) => {
            console.log(response.data);

            if (response.status === 200) {
                this.banks = response.data.data;
                // this.form2.client_name = response.data.data.name + "-" + response.data.data.name;
            } else {
                // this.showNotification(response.data.message, 'bottom-right', 'warning', true);
            }
        })
        .catch((error) => {
            console.log(error.response);
            // this.showNotification(error.response.data.message, 'bottom-right', 'danger', true);
        });
    },
  },
  mounted() {
      console.log("4 - Profile mounted");
      this.getBanks();
  },
}
</script>