interface Answer {
  answerId: number;         // Уникальный идентификатор ответа
  questionId: number;      // Идентификатор вопроса, к которому относится этот ответ
  answerOrder: number;     // Порядок ответа в списке
  answerText: string;      // Текст ответа
  answerCorrect: boolean;   // Является ли ответ правильным
  // nextQuestions: string;// Идентификаторы следующих вопросов (если есть)
  logId: number | string;   // Идентификатор лога (может быть числом или строкой)
  answerError: string;      // Ошибка, связанная с ответом (если есть)
}

// Интерфейс для вопроса
interface Questions {
  questionId: number;         // Уникальный идентификатор вопроса
  questionOrder: number;      // Порядок вопроса в списке
  questionText: string;       // Текст самого вопроса
  answersCount: number;        // Количество ответов на вопрос
  answerType: number;        // Тип ответа (например, множественный выбор)
  fieldComment: boolean;      // Флаг, указывающий, требуется ли комментарий к ответу
  questionType: number;       // Тип вопроса (например, текстовый или выбор)
  // lastAnswersOrder: number;// Последний порядок ответов
  questionError: string;      // Ошибка, связанная с вопросом (если есть)
  answerList: Answer[];       // Массив объектов ответов на данный вопрос
}

// Интерфейс для состояния хранилища опросов
// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface questionList {
  data: Questions[];           // Массив вопросов с ответами
}
