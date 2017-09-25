import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { StudentComponent }   from '../student/student.component';
import { StudentFormComponent }   from '../student-form/student-form.component';
import { HomeComponent }   from '../home/home.component';
 
import { MajorComponent }   from '../major/major.component';
import { MajorFormComponent }   from '../major-form/major-form.component';

import { ClassComponent }   from '../class/class.component';
import { ClassFormComponent }   from '../class-form/class-form.component';

import { GradeComponent }   from '../grade/grade.component';
import { GradeFormComponent }   from '../grade-form/grade-form.component';

import { InstructorComponent }   from '../instructor/instructor.component';
import { InstructorFormComponent }   from '../instructor-form/instructor-form.component';

import { AssignmentComponent }   from '../assignment/assignment.component';
import { AssignmentFormComponent }   from '../assignment-form/assignment-form.component';

import { MajorclassComponent }   from '../majorclass/majorclass.component';
import { MajorclassFormComponent }   from '../majorclass-form/majorclass-form.component';

import { StudentclassComponent }   from '../studentclass/studentclass.component';
import { StudentclassFormComponent }   from '../studentclass-form/studentclass-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'student',  component: StudentComponent },
  { path: 'student/edit/:id', component: StudentFormComponent },
  { path: 'student/add', component: StudentFormComponent },
  
  { path: 'major',  component: MajorComponent },
  { path: 'major/edit/:id', component: MajorFormComponent },
  { path: 'major/add', component: MajorFormComponent },

  { path: 'class',  component: ClassComponent },
  { path: 'class/edit/:id', component: ClassFormComponent },
  { path: 'class/add', component: ClassFormComponent },

  { path: 'grade',  component: GradeComponent },
  { path: 'grade/edit/:id', component: GradeFormComponent },
  { path: 'grade/add', component: GradeFormComponent },

  { path: 'instructor',  component: InstructorComponent },
  { path: 'instructor/edit/:id', component: InstructorFormComponent },
  { path: 'instructor/add', component: InstructorFormComponent },

  { path: 'assignment',  component: AssignmentComponent },
  { path: 'assignment/edit/:id', component: AssignmentFormComponent },
  { path: 'assignment/add', component: AssignmentFormComponent },

  { path: 'majorclass',  component: MajorclassComponent },
  { path: 'majorclass/edit/:id', component: MajorclassFormComponent },
  { path: 'majorclass/add', component: MajorclassFormComponent },

  { path: 'studentclass',  component: StudentclassComponent },
  { path: 'studentclass/edit/:id', component: StudentclassFormComponent },
  { path: 'studentclass/add', component: StudentclassFormComponent },
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
