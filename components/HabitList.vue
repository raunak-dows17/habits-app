<template>
  <div>
    <ul class="space-y-4">
      <li
        v-for="habit in habits"
        v-if="habits.length !== 0"
        class="bg-white px-3 py-2 rounded-sm"
      >
        <div :key="habit.id" class="flex items-center justify-between mb-4">
          <p
            class="text-teal-500 font-bold"
            :class="{ 'line-through': habit.completions.includes(today) }"
          >
            {{ habit.name }}
          </p>
          <button class="text-gray-800" @click="deleteHabit(habit.id)">
            Delete
          </button>
        </div>

        <div class="flex items-center gap-2">
          <input
            type="checkbox"
            :name="habit.name"
            :id="habit.name"
            @change="toggleCompletion(habit)"
            :checked="habit.completions.includes(today)"
            class="appearance-none size-4 border border-teal-500 rounded-md checked:bg-teal-500 checked:text-white checked:text-xs checked:after:content-['\2713'] flex justify-center items-center"
          />
          <label :for="habit.name" class="text-sm text-gray-500"
            >I did this today.</label
          >
        </div>

        <p class="text-sm text-gray-500 mt-2">
          Current Streak: {{ habit.streak }} days.
        </p>
      </li>
      <li
        v-else
        class="flex justify-center gap-2 items-center size-full text-red-500"
      >
        <span class="material-icons">face</span>
        <p>No Habits</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { format } from "date-fns";

const props = defineProps({
  habits: Array,
});

const habitStore = useHabitStore();

const deleteHabit = async (id) => {
  await habitStore.deleteHabit(id);
};

const toggleCompletion = async (habit) => {
  habitStore.toggleCompletion(habit);
};

const today = format(new Date(), "yyyy-MM-dd");
</script>
