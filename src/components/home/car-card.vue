<template>
  <div class="card">
    <ul class="card-details col-7">
      <li>
        <p class="text">
          Brand: <span class="text --bold">{{ car.brand }}</span>
        </p>
      </li>
      <li>
        <p class="text">
          Model: <span class="text --bold">{{ car.model }}</span>
        </p>
      </li>
      <li>
        <p class="text">
          Number plate:
          <span class="text --bold --uppercase">{{ car.numberPlate }}</span>
        </p>
      </li>
      <li>
        <p class="card-status">
          Status: <span :class="`card-status_circle ${statusColor}`"></span>
          {{ car.status }}
        </p>
      </li>
    </ul>
    <div class="card-clients col-5" v-if="car.clients">
      <p class="title text --bold">Clients:</p>
      <ul class="card-clients_list">
        <li v-for="(item, index) in car.clients" :key="index">
          {{ item.client }}
        </li>
      </ul>
    </div>
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
    let dateOfIssue = props.car?.clients?.dateOfIssue;

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
      dateOfIssue,
    };
  },
};
</script>

<style lang="scss">
.card {
  width: 100%;
  border-radius: 5px;
  padding: 10px 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: flex-start;
  box-shadow: 0px 2px 14px -7px #585858;
  ul {
    margin: 0;
    padding: 0;
    li{
      list-style-type: none;
    }
  }
  &-details {
    li {
      margin-bottom: 12px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
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
  &-clients {
    background-color: #eaeaea;
    padding: 10px;
    border-radius: 5px;
    .title{
      margin-bottom: 15px;
    }
    li{
      margin-bottom: 10px;
    }
  }
  &:last-child {
    margin-bottom: 0;
  }
}
</style>
