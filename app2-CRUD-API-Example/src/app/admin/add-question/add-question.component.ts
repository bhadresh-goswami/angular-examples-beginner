import { Component, OnInit } from '@angular/core';
import { QuestionResponse } from 'src/app/models/question.model';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css'],
})
export class AddQuestionComponent implements OnInit {
  questionsResponseObj!: QuestionResponse;
  test!: [];
  constructor(private questionService: QuestionService) {}
  ngOnInit(): void {
    //get questions here
    this.questionService.getQuestions().subscribe((res) => {
      console.log(res);

      // if (res != null) {
      //   this.questionsResponseObj = res as QuestionResponse;
      //   console.log(
      //     `all questions: ${JSON.stringify(this.questionsResponseObj)}`
      //   );
      // }
    });
  }
}
