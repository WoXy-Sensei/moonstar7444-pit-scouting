<script setup lang="ts">
import { useRobotStore } from "@/stores/robot";

const useRobot = useRobotStore();
</script>

<template>
  <div class="robot">
    <input
      type="number"
      step="any"
      placeholder="F"
      required
      class="input input-bordered w-20 border-red-500 m-5 text-center"
      v-model="useRobot.robotMeasurement.front"
    />
    <div class="robot-row">
      <input
        type="number"
        step="any"
        placeholder="L"
        required
        class="input input-bordered w-20 border-red-500 text-center"
        v-model="useRobot.robotMeasurement.left"
      />
      <svg width="100" height="100">
        <rect
          width="100"
          height="100"
          style="fill: transparent; stroke: red; stroke-width: 5; stroke-opacity: 0.9"
        />
      </svg>
      <input
        type="number"
        step="any"
        required
        placeholder="R"
        class="input input-bordered w-20 border-red-500 text-center"
        v-model="useRobot.robotMeasurement.right"
      />
    </div>
    <input
      type="number"
      step="any"
      required
      placeholder="B"
      class="input input-bordered w-20 border-red-500 m-5 text-center"
      v-model="useRobot.robotMeasurement.back"
    />
  </div>
</template>

<style scoped lang="scss">
.robot {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .robot-row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
}
</style>
