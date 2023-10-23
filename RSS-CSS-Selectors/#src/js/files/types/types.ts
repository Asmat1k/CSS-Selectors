// Информация для навигации
export type Task = {
  title: string,
  subtitle: string,
  id: string,
  task: string,
  example: string, 
}

export type Level = {
  toDo: string,
  type: string,
  answer: string,
  status: boolean,
  helpUsed: boolean,
  htmlCode: string,
  tableComponents: string,
  helpText: helpLevel
}

export type helpLevel = {
  title: string,
  subtitle: string,
  id: string,
  task: string,
  example: string,
}