<script setup lang="ts">
import { ref, computed } from 'vue';
import QuizQuestion from './reviewer/HomeReview.vue'
import { questions } from './data/questions';

const userAnswers = ref<Record<number, string | string[]>>({});
const quizSubmitted = ref(false);

const score = computed(() => {
  let correctCount = 0;
  questions.forEach((q, index) => {
    const userAnswer = userAnswers.value[index];
    if (userAnswer !== undefined) {
      if (Array.isArray(q.correctAnswer)) {
        // For multiple correct answers (checkboxes)
        if (Array.isArray(userAnswer) && userAnswer.length === q.correctAnswer.length &&
            userAnswer.every(ans => q.correctAnswer.includes(ans))) {
          correctCount++;
        }
      } else {
        // For single correct answer (radio or text)
        if (userAnswer === q.correctAnswer) {
          correctCount++;
        }
      }
    }
  });
  return correctCount;
});

const totalQuestions = computed(() => questions.length);

const submitQuiz = () => {
  quizSubmitted.value = true;
};

const resetQuiz = () => {
  userAnswers.value = {};
  quizSubmitted.value = false;
};

const handleAnswer = (questionIndex: number, answer: string | string[]) => {
  userAnswers.value[questionIndex] = answer;
};
</script>

<template>
  <div class="min-h-screen bg-blue-100 flex items-center justify-center p-4">
    <!-- <div class="bg-white p-8 rounded-lg shadow-lg w-800"> -->
      <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg md:max-w-2xl lg:max-w-3xl">
      <h1 class="text-3xl font-bold text-center mb-6 text-blue-700">Frontend Quiz</h1>

      <div v-if="!quizSubmitted">
        <QuizQuestion
          v-for="(question, index) in questions"
          :key="index"
          :question="question"
          :question-index="index"
          @answer-selected="handleAnswer"
          :user-answer="userAnswers[index]"
        />
        <button
          @click="submitQuiz"
          class="mt-8 w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out font-semibold"
        >
          Submit
        </button>
      </div>

      <div v-else class="text-center">
        <h2 class="text-2xl font-bold mb-4 text-green-700">Quiz Results</h2>
        <p class="text-xl mb-6">You scored <span class="font-extrabold text-blue-600">{{ score }}</span> out of <span class="font-extrabold text-blue-600">{{ totalQuestions }}</span> questions correctly!</p>

        <div class="mt-8">
  <h3 class="text-2xl font-bold mb-6 text-gray-800">Review Your Answers:</h3>
  <div
    v-for="(question, index) in questions"
    :key="index"
    class="mb-6 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out border border-gray-100 w-full text-left"
  >
    <p class="font-extrabold text-xl mb-4 text-gray-900 leading-relaxed">
      <span class="text-blue-600 mr-2">{{ index + 1 }}.</span> {{ question.questionText }}
    </p>
    <p class="text-gray-700 mb-1">
      Your answer:
      <span
        class="font-semibold"
        :class="{
          'text-green-600': Array.isArray(question.correctAnswer)
            ? (Array.isArray(userAnswers[index]) && (userAnswers[index] as string[]).every(ans => question.correctAnswer.includes(ans)) && (userAnswers[index] as string[]).length === question.correctAnswer.length)
            : userAnswers[index] === question.correctAnswer,
          'text-red-600': Array.isArray(question.correctAnswer)
            ? !(Array.isArray(userAnswers[index]) && (userAnswers[index] as string[]).every(ans => question.correctAnswer.includes(ans)) && (userAnswers[index] as string[]).length === question.correctAnswer.length)
            : userAnswers[index] !== question.correctAnswer
        }"
      >
        {{ Array.isArray(userAnswers[index]) ? (userAnswers[index] as string[]).join(', ') : (userAnswers[index] || 'No answer') }}
      </span>
    </p>
    <p class="text-gray-700">
      Correct answer:
      <span class="font-semibold text-green-600">
        {{ Array.isArray(question.correctAnswer) ? question.correctAnswer.join(', ') : question.correctAnswer }}
      </span>
    </p>
  </div>
</div>

        <button
          @click="resetQuiz"
          class="mt-8 w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition duration-300 ease-in-out font-semibold"
        >
          Retake Quiz
        </button>
      </div>
    </div>
  </div>
</template>