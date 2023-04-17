<template>
  <div>
    <h1>Create an event</h1>
    <form @submit.prevent="sendForm">
      <BaseSelect
        v-model="event.category"
        :options="categories"
        label="Select a category"
        />

      <fieldset>
        <legend>Name & describe your event</legend>

        <BaseInput
          v-model="event.title"
          label="Title"
          type="text"
          error="Please enter a title"
        />

        <BaseInput
          v-model="event.description"
          label="Description"
          type="text"
        />
      </fieldset>

      <fieldset>
        <legend>Where is your event?</legend>

        <BaseInput
          v-model="event.location"
          label="Location"
          type="text"
        />
      </fieldset>


      <fieldset>
        <legend>Are pets allowed?</legend>

        <div>
          <BaseRadioGroup
            v-model="event.pets"
            name="pets"
            :options="petOptions"
            :vertical=true
          />
        </div>
      </fieldset>

      <fieldset>
        <legend>Extras</legend>

        <div>
          <BaseCheckbox
            v-model="event.extras.catering"
            label="Catering"
          />
        </div>

        <div>
          <BaseCheckbox
            v-model="event.extras.music"
            label="Live Music"
          />
        </div>
        
      </fieldset>

      <button class="button -fill-gradient" type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            categories: [
                "sustainability",
                "nature",
                "animal welfare",
                "housing",
                "education",
                "food",
                "community"
            ],
            event: {
                category: "",
                title: "",
                description: "",
                location: "",
                pets: 1,
                extras: {
                    catering: false,
                    music: false
                }
            },
            petOptions: [
                { label: "Yes", value: 1 },
                { label: "No", value: 0 }
            ]
        };
    },
    methods: {
        sendForm() {
          axios.post("http://localhost:3000/events", this.event)
            .then(function (response) {
              console.log(this.event);
            })
            .catch(function (error) {
              console.log(error);
            });
        }
    }
}
</script>

<style scoped>
fieldset {
  border: 0;
  margin: 0;
  padding: 0;
}

legend {
  font-size: 28px;
  font-weight: 700;
  margin-top: 20px;
}
</style>
