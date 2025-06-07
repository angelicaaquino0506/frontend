<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-100 to-teal-50 flex items-center justify-center p-4 sm:p-6">
    <div class="relative rounded-lg shadow-lg w-full max-w-lg md:max-w-2xl lg:max-w-3xl">
      <div class="absolute -inset-1 bg-gray-100 rounded-lg transform translate-x-1 translate-y-1 blur-md"></div>
      <div class="bg-white p-6 sm:p-8 rounded-lg relative">
        <h1 class="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-6 text-blue-700 font-custom">Frontend Quiz</h1>

        <div v-if="!quizSubmitted">
          <QuizQuestion
            v-for="(question, index) in questions"
            :key="index"
            :question="question"
            :question-index="index"
            @answer-selected="handleAnswer"
            :user-answer="userAnswers?.[index]"
          />
          <button
            @click="submitQuiz"
            class="mt-8 w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-md hover:from-blue-700 hover:to-blue-800 transition duration-300 ease-in-out font-semibold shadow-md text-base sm:text-lg"
          >
            Submit
          </button>
        </div>

        <div v-else class="text-center">
          <h2 class="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-teal-700">Quiz Results</h2>
          <p class="text-base sm:text-xl mb-6">You scored <span class="font-extrabold text-blue-600">{{ score }}</span> out of <span class="font-extrabold text-blue-600">{{ totalQuestions }}</span> questions correctly!</p>

          <div class="mt-8">
            <h3 class="text-xl sm:text-2xl font-bold mb-6 text-gray-800">Review Your Answers:</h3>
            <div
              v-for="(question, index) in questions"
              :key="index"
              class="mb-6 p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ease-in-out border border-gray-100 w-full text-left"
            >
              <div class="flex items-center mb-4">
                <div class="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 text-sm">
                  {{ index + 1 }}
                </div>
                <p class="font-extrabold text-base sm:text-xl text-gray-900 leading-relaxed">{{ question.questionText }}</p>
              </div>
              <p class="text-gray-700 mb-1 text-sm sm:text-base">
                Your answer:
                <span
                  class="font-semibold p-1 rounded"
                  :class="{
                    'bg-green-100 text-green-600': Array.isArray(question.correctAnswer)
                      ? Array.isArray(userAnswers?.[index]) && (userAnswers?.[index] as string[]).every(ans => question.correctAnswer.includes(ans)) && (userAnswers?.[index] as string[]).length === question.correctAnswer.length
                      : userAnswers?.[index] === question.correctAnswer,
                    'bg-red-100 text-red-600': Array.isArray(question.correctAnswer)
                      ? !(Array.isArray(userAnswers?.[index]) && (userAnswers?.[index] as string[]).every(ans => question.correctAnswer.includes(ans)) && (userAnswers?.[index] as string[]).length === question.correctAnswer.length)
                      : userAnswers?.[index] !== question.correctAnswer,
                    'text-gray-500 bg-gray-50': userAnswers?.[index] === undefined // Style for unanswered questions
                  }"
                >
                  {{ Array.isArray(userAnswers?.[index]) ? (userAnswers?.[index] as string[]).join(', ') : (userAnswers?.[index] || 'No answer') }}
                </span>
              </p>
              <p class="text-gray-700 text-sm sm:text-base">
                Correct answer:
                <span class="font-semibold bg-green-100 text-green-600 p-1 rounded">
                  {{ Array.isArray(question.correctAnswer) ? question.correctAnswer.join(', ') : question.correctAnswer }}
                </span>
              </p>
            </div>
          </div>

          <button
            @click="resetQuiz"
            class="mt-8 w-full bg-gradient-to-r from-indigo-600 to-indigo-700 text-white py-3 rounded-md hover:from-indigo-700 hover:to-indigo-800 transition duration-300 ease-in-out font-semibold shadow-md text-base sm:text-lg"
          >
            Retake Quiz
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-100 to-teal-50 flex items-center justify-center p-4 sm:p-6">
    <div class="relative rounded-lg shadow-lg w-full max-w-lg md:max-w-2xl lg:max-w-3xl">
      <div class="absolute -inset-1 bg-gray-100 rounded-lg transform translate-x-1 translate-y-1 blur-md"></div>
      <div class="bg-white p-6 sm:p-8 rounded-lg relative">
        <h1 class="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-6 text-blue-700 font-custom">Frontend Quiz</h1>

        <div v-if="!quizSubmitted">
          <QuizQuestion
            v-for="(question, index) in questions"
            :key="index"
            :question="question"
            :question-index="index"
            @answer-selected="handleAnswer"
            :user-answer="userAnswers?.[index]"
          />
          <button
            @click="submitQuiz"
            class="mt-8 w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-md hover:from-blue-700 hover:to-blue-800 transition duration-300 ease-in-out font-semibold shadow-md text-base sm:text-lg"
          >
            Submit
          </button>
        </div>

        <div v-else class="text-center">
          <h2 class="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-teal-700">Quiz Results</h2>
          <p class="text-base sm:text-xl mb-6">You scored <span class="font-extrabold text-blue-600">{{ score }}</span> out of <span class="font-extrabold text-blue-600">{{ totalQuestions }}</span> questions correctly!</p>

          <div class="mt-8">
            <h3 class="text-xl sm:text-2xl font-bold mb-6 text-gray-800">Review Your Answers:</h3>
            <div
              v-for="(question, index) in questions"
              :key="index"
              class="mb-6 p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ease-in-out border border-gray-100 w-full text-left"
            >
              <div class="flex items-center mb-4">
                <div class="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 text-sm">
                  {{ index + 1 }}
                </div>
                <p class="font-extrabold text-base sm:text-xl text-gray-900 leading-relaxed">{{ question.questionText }}</p>
              </div>
              <p class="text-gray-700 mb-1 text-sm sm:text-base">
                Your answer:
                <span
                  class="font-semibold p-1 rounded"
                  :class="{
                    'bg-green-100 text-green-600': Array.isArray(question.correctAnswer)
                      ? Array.isArray(userAnswers?.[index]) && (userAnswers?.[index] as string[]).every(ans => question.correctAnswer.includes(ans)) && (userAnswers?.[index] as string[]).length === question.correctAnswer.length
                      : userAnswers?.[index] === question.correctAnswer,
                    'bg-red-100 text-red-600': Array.isArray(question.correctAnswer)
                      ? !(Array.isArray(userAnswers?.[index]) && (userAnswers?.[index] as string[]).every(ans => question.correctAnswer.includes(ans)) && (userAnswers?.[index] as string[]).length === question.correctAnswer.length)
                      : userAnswers?.[index] !== question.correctAnswer,
                    'text-gray-500 bg-gray-50': userAnswers?.[index] === undefined // Style for unanswered questions
                  }"
                >
                  {{ Array.isArray(userAnswers?.[index]) ? (userAnswers?.[index] as string[]).join(', ') : (userAnswers?.[index] || 'No answer') }}
                </span>
              </p>
              <p class="text-gray-700 text-sm sm:text-base">
                Correct answer:
                <span class="font-semibold bg-green-100 text-green-600 p-1 rounded">
                  {{ Array.isArray(question.correctAnswer) ? question.correctAnswer.join(', ') : question.correctAnswer }}
                </span>
              </p>
            </div>
          </div>

          <button
            @click="resetQuiz"
            class="mt-8 w-full bg-gradient-to-r from-indigo-600 to-indigo-700 text-white py-3 rounded-md hover:from-indigo-700 hover:to-indigo-800 transition duration-300 ease-in-out font-semibold shadow-md text-base sm:text-lg"
          >
            Retake Quiz
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import QuizQuestion from './reviewer/HomeReview.vue';
import { questions } from './data/questions';

const userAnswers = ref<Record<number, string | string[]>>({});
const quizSubmitted = ref(false);

const score = computed(() => {
  let correctCount = 0;
  questions.forEach((q, index) => {
    const userAnswer = userAnswers.value?.[index];
    if (userAnswer !== undefined) {
      if (Array.isArray(q.correctAnswer)) {
        if (Array.isArray(userAnswer) && userAnswer.length === q.correctAnswer.length &&
            userAnswer.every(ans => q.correctAnswer.includes(ans))) {
          correctCount++;
        }
      } else {
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
  if (!userAnswers.value) {
    userAnswers.value = {};
  }
  userAnswers.value[questionIndex] = answer;
};
</script>

<style scoped>
/*
  You might need to import a custom font in your main CSS file or via a link in index.html
  For example, to use 'Montserrat':
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap" rel="stylesheet">
*/
.font-custom {
  font-family: 'Montserrat', sans-serif; /* Example of a more unique font */
}
</style>