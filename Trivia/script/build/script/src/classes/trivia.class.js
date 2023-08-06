import { Question } from "./question.class.js";
export class Trivia {
    //own properties
    questions;
    numOfQuestions;
    category;
    difficulty;
    answersResults = {
        correct: [],
        incorrect: [],
    };
    //constructor
    constructor(numOfQuestions = 10, category, difficulty) {
        this.numOfQuestions = numOfQuestions;
        this.difficulty = difficulty;
        this.category = category;
    }
    //Trivia.prototype
    async getQuestions() {
        try {
            const response = await fetch(`https://opentdb.com/api.php?amount=${this.numOfQuestions}&category=${this.category}${this.difficulty ? `difficulty=${this.difficulty}` : ""}&&type=multiple`);
            if (!response.ok) {
                throw new Error("Failed to fetch questions from the API.");
            }
            let answer = await response.json();
            if (answer.response_code === 0) {
                console.log(answer);
                let questions = answer.results.map((question) => new Question(question.category, question.difficulty, question.question, question.correct_answer, question.incorrect_answers));
                this.questions = questions;
                return questions;
            }
            else {
                throw new Error(`The API doesn't have enough questions for your query - 
               Try different settings. `);
            }
        }
        catch (error) {
            console.error("Error while fetching questions:", error);
            throw error;
        }
    }
    registerAsCorrect(questionIndex) {
        this.answersResults.correct.push(questionIndex);
    }
    registerAsIncorrect(questionIndex) {
        this.answersResults.incorrect.push(questionIndex);
    }
    //    Static method
    static async getCategories() {
        const categories = await fetch("https://opentdb.com/api_category.php");
        return await categories.json().then((result) => result.trivia_categories);
    }
}
