<script setup lang="ts">
import { defineProps, defineEmits, ref, watch } from 'vue';
import { Question } from '../data/questions';

const props = defineProps<{
  question: Question;
  questionIndex: number;
  userAnswer: string | string[] | undefined;
}>();

const emit = defineEmits(['answer-selected']);

const selectedOption = ref<string | string[]>(props.userAnswer || (props.question.type === 'checkbox' ? [] : ''));

watch(() => props.userAnswer, (newValue) => {
  if (newValue !== undefined) {
    selectedOption.value = newValue;
  } else {
    selectedOption.value = props.question.type === 'checkbox' ? [] : '';
  }
});

const handleRadioChange = (event: Event) => {
  selectedOption.value = (event.target as HTMLInputElement).value;
  emit('answer-selected', props.questionIndex, selectedOption.value);
};

const handleCheckboxChange = (event: Event) => {
  const value = (event.target as HTMLInputElement).value;
  const isChecked = (event.target as HTMLInputElement).checked;

  let currentSelection = Array.isArray(selectedOption.value) ? [...selectedOption.value] : [];

  if (isChecked) {
    currentSelection.push(value);
  } else {
    currentSelection = currentSelection.filter(item => item !== value);
  }
  selectedOption.value = currentSelection;
  emit('answer-selected', props.questionIndex, selectedOption.value);
};

const handleTextChange = (event: Event) => {
  selectedOption.value = (event.target as HTMLInputElement).value;
  emit('answer-selected', props.questionIndex, selectedOption.value);
};
</script>

<template>
    <div class="mb-6 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out border border-gray-100 w-full">
      <p class="font-extrabold text-xl mb-4 text-gray-900 leading-relaxed">
        <span class="text-blue-600 mr-2">{{ questionIndex + 1 }}.</span> {{ question.questionText }}
      </p>
  
      <div v-if="question.type === 'radio'">
        <label
          v-for="option in question.options"
          :key="option"
          class="flex items-center mb-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 ease-in-out w-full"
          :class="{ 'bg-blue-100 border-blue-500 shadow-sm': selectedOption === option }"
        >
          <input
            type="radio"
            :name="`question-${questionIndex}`"
            :value="option"
            :checked="selectedOption === option"
            @change="handleRadioChange"
            class="mr-3 h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500 form-radio transition-all duration-200 ease-in-out"
          />
          <span class="text-gray-700">{{ option }}</span>
        </label>
      </div>
  
      <div v-else-if="question.type === 'checkbox'">
        <label
          v-for="option in question.options"
          :key="option"
          class="flex items-center mb-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 ease-in-out w-full"
          :class="{ 'bg-blue-100 border-blue-500 shadow-sm': Array.isArray(selectedOption) && selectedOption.includes(option) }"
        >
          <input
            type="checkbox"
            :name="`question-${questionIndex}`"
            :value="option"
            :checked="Array.isArray(selectedOption) && selectedOption.includes(option)"
            @change="handleCheckboxChange"
            class="mr-3 h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 form-checkbox transition-all duration-200 ease-in-out"
          />
          <span class="text-gray-700">{{ option }}</span>
        </label>
      </div>
  
      <div v-else-if="question.type === 'text'">
        <input
          type="text"
          :value="selectedOption as string"
          @input="handleTextChange"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ease-in-out shadow-sm"
          placeholder="Type your answer here..."
        />
      </div>
  
      <div v-else-if="question.type === 'boolean'">
        <label
          class="flex items-center mb-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 ease-in-out w-full"
          :class="{ 'bg-blue-100 border-blue-500 shadow-sm': selectedOption === 'Y' }"
        >
          <input
            type="radio"
            :name="`question-${questionIndex}`"
            value="Y"
            :checked="selectedOption === 'Y'"
            @change="handleRadioChange"
            class="mr-3 h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500 form-radio transition-all duration-200 ease-in-out"
          />
          <span class="text-gray-700">Yes</span>
        </label>
        <label
          class="flex items-center mb-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 ease-in-out w-full"
          :class="{ 'bg-blue-100 border-blue-500 shadow-sm': selectedOption === 'N' }"
        >
          <input
            type="radio"
            :name="`question-${questionIndex}`"
            value="N"
            :checked="selectedOption === 'N'"
            @change="handleRadioChange"
            class="mr-3 h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500 form-radio transition-all duration-200 ease-in-out"
          />
          <span class="text-gray-700">No</span>
        </label>
      </div>
    </div>
  </template>