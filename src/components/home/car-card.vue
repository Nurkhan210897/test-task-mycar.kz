<template>
  <div class="card">
    <pre>{{dateOfIssue}}</pre>
    <p class="text">
      Brand: <span class="text --bold">{{ car.brand }}</span>
    </p>
    <p class="text">
      Model: <span class="text --bold">{{ car.model }}</span>
    </p>
    <p class="text">
      Number plate:
      <span class="text --bold --uppercase">{{ car.numberPlate }}</span>
    </p>
    <p class="card-status">
      Status: <span :class="`card-status_circle ${statusColor}`"></span> {{ car.status }}
      {{dateOfIssue}}
    </p>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  props: {
    car: Object,
  },
  setup(props) {
    let status = props.car.status;
    let dateOfIssue = new Date(props.car?.clients?.dateOfIssue);

    const statusColor = computed(() => {
      switch (status) {
        case "booked":
          return "red";
        case "in rent":
          return "blue";
        case "in the parking":
          return "green";
        default:
          return "green";
      }
    });

    return {
      statusColor,
      dateOfIssue
    };
  },
};
</script>

<style lang="scss">
.card {
  width: 100%;
  border-radius: 5px;
  padding: 10px 20px;
  border: 1px solid #b2b2b2;
  margin-bottom: 20px;
  &-status {
    display: flex;
    align-items: center;
    &_circle {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      display: block;
      margin: 0 5px;
      &.red {
        background-color: red;
      }
      &.blue {
        background-color: blue;
      }
      &.green {
        background-color: green;
      }
    }
  }
  &:last-child{
    margin-bottom: 0;
  }
}
</style>
