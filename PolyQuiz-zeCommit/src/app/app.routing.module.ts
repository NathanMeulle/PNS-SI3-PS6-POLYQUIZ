import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ProfileListPageComponent } from './profiles/profile-list-page/profile-list-page.component';
import { QuizListPageComponent } from './quizzes/quiz-list-page/quiz-list-page.component';
import { QuizCreatePageComponent } from './manage/creation-page/quiz-create-page/quiz-create-page.component';
import { QuizPageMemoryComponent } from './quizPage/quiz-page-memory/quiz-page-memory.component';
import {QuizPageSizeSelectionComponent} from './quizPage/quiz-page-vue/quiz-page-size-selection/quiz-page-size-selection.component';
import {QuizPageVueComponent} from './quizPage/quiz-page-vue/quiz-page-vue.component';
import {QuizPageMoteurComponent} from './quizPage/quiz-page-moteur/quiz-page-moteur.component'
import { ManageProfilesComponent } from './manage/manage-profiles/manage-profiles.component';
import { ProfileCreatePageComponent } from './manage/profile-create-page/profile-create-page.component';

const routes: Routes = [
  { path: '', component : AccueilComponent },
  { path: ':trouble/profile-list-page', component : ProfileListPageComponent },
  { path: ':trouble/profile-list-page/:idProfile/quiz-list-page', component : QuizListPageComponent },
  { path: 'memoire/profile-list-page/:idProfile/quiz-list-page/:idQuiz', component : QuizPageMemoryComponent},
  { path: 'vue/profile-list-page/:idProfile/quiz-list-page/:idQuiz/quiz-page-size-selection', component : QuizPageSizeSelectionComponent},
  { path: 'vue/profile-list-page/:idProfile/quiz-list-page/:idQuiz/quiz-page-size-selection/:size', component : QuizPageVueComponent},
  { path: ':trouble/profile-list-page/:idProfile/quiz-create-page', component : QuizCreatePageComponent },
  { path:':trouble/profile-list-page/manage-profiles', component : ManageProfilesComponent},
  { path:':trouble/profile-list-page/manage-profiles/create', component : ProfileCreatePageComponent},

  { path: 'vue/profile-list-page/:idProfile/quiz-list-page/:idQuiz', component : QuizPageVueComponent},
  { path: 'moteur/profile-list-page/:idProfile/quiz-list-page/:idQuiz', component : QuizPageMoteurComponent}


]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {

}
