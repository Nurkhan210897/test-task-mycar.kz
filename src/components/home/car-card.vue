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
    <div class="col-5" v-if="car.clients">
      <div class="card-clients">
        <p class="title text --bold">Clients:</p>
        <ul class="card-clients_list">
          <li v-for="(item, index) in car.clients" :key="index">
            <p class="text">{{ item.client }}</p>
            <p class="text">Date of issue: <span class="text --bold">{{formatDate(item.dateOfIssue)}}</span></p>
            <p class="text">Return date: <span class="text --bold">{{formatDate(item.returnDate)}}</span></p>
          </li>
        </ul>
      </div>
    </div>
    <div class="card-utils">
      <button class="btn --delete" @click="deleteCar">&#10060;</button>
      <button class="btn --edit" @click="showEditModal(car)">&#128396;</button>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { ref } from "vue";
import {formatDate} from "@/utils/formatDate"

export default {
  props: {
    car: {
      type: Object,
      default: () => {},
    },
    carIndex: {
      type: Number,
      default: () => 0,
    },
  },

  emits: ["showEditModal"],

  setup(props, { emit }) {
    const store = useStore();
    const status = props.car.status;
    const dateOfIssue = props.car?.clients?.dateOfIssue;
    let isModal = ref(false);

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

    const deleteCar = () => store.commit("deleteCar", props.carIndex);

    const showEditModal = (car) => {
      emit("showEditModal", car);
    };

    return {
      statusColor,
      dateOfIssue,
      deleteCar,
      isModal,
      showEditModal,
      formatDate
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
  position: relative;
  ul {
    margin: 0;
    padding: 0;
    li {
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
    .title {
      margin-bottom: 15px;
    }
    li {
      margin-bottom: 10px;
    }
  }
  &-utils {
    position: absolute;
    top: 12px;
    right: 6px;
    cursor: pointer;
    button {
      display: block;
      width: 25px;
      height: 25px;
      margin-bottom: 10px;
    }
  }
  &:last-child {
    margin-bottom: 0;
  }
}
</style>
