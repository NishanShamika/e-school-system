import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { AuthGuard } from './auth.guard';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { MessagesInboxComponent } from './messages-inbox/messages-inbox.component';



import { DashboardComponent } from './dashboard/dashboard.component';
import { VideoUploadComponent } from './video-component/video-upload/video-upload.component';
import { PaperUploadComponent } from './pastpaper-component/paper-upload/paper-upload.component';
import { CreateProfileComponent } from './components/create-profile/create-profile.component';
import { AllProfilesComponent } from './components/all-profiles/all-profiles.component';

import { UpdatePostComponent } from './update-post/update-post.component';
import { AppComponent } from './app.component';
import { VideoDetailComponent } from './video-component/video-detail/video-detail.component';
import { VideoListComponent } from './video-component/video-list/video-list.component';
import { VideoCenterComponent } from './video-component/video-center/video-center.component';
import {PaperComponent} from './pastpaper-component/paper/paper.component'
import { PastpaperCenterComponent } from './pastpaper-component/pastpaper-center/pastpaper-center.component';
import { PastpaperDetailComponent } from './pastpaper-component/pastpaper-detail/pastpaper-detail.component';
import { PastpaperListComponent } from './pastpaper-component/pastpaper-list/pastpaper-list.component';
//import {VideoUploadGrade06Component} from 'src/app/video-component/video-upload-grade06/video-upload-grade06.component';
import { from } from 'rxjs';
import { VideoUploadGradeComponent } from './video-component/video-upload-grade/video-upload-grade.component';
import { VideoPageGradeComponent } from './video-component/video-page-grade/video-page-grade.component';
import { VideodisplayComponent } from './video-component/videodisplay/videodisplay.component';
import { Videodislpay07Component } from './video-component/videodislpay07/videodislpay07.component';
import { Videoupload07Component } from './video-component/videoupload07/videoupload07.component';
import { Videoupload06Component } from './video-component/videoupload06/videoupload06.component';
import { Videoupload8Component } from './video-component/videoupload8/videoupload8.component';
import { Videoupload9Component } from './video-component/videoupload9/videoupload9.component';
import { Videoupload10Component } from './video-component/videoupload10/videoupload10.component';
import { Videoupload11Component } from './video-component/videoupload11/videoupload11.component';
import { Videoddisplay8Component } from './video-component/videoddisplay8/videoddisplay8.component';
import { Videoddisplay9Component } from './video-component/videoddisplay9/videoddisplay9.component';
import { Videoddisplay10Component } from './video-component/videoddisplay10/videoddisplay10.component';
import { Videoddisplay11Component } from './video-component/videoddisplay11/videoddisplay11.component';
import { UploadFilesComponent } from './components/upload-files/upload-files.component';
import { UserDetailsComponent } from './user-details/user-details.component';

import { Grade06paperComponent } from "./pastpaper-component/paperDisplaycom/grade06paper/grade06paper.component";
import { Paperupload06Component } from "./pastpaper-component/paperUploadcom/paperupload06/paperupload06.component";
import { Paperupload08Component } from "./pastpaper-component/paperUploadcom/paperupload08/paperupload08.component";
import { Paperupload09Component } from "./pastpaper-component/paperUploadcom/paperupload09/paperupload09.component";
import { Paperupload10Component } from "./pastpaper-component/paperUploadcom/paperupload10/paperupload10.component";
import { Paperupload11Component } from "./pastpaper-component/paperUploadcom/paperupload11/paperupload11.component";
import { Paperupload07Component } from "./pastpaper-component/paperUploadcom/paperupload07/paperupload07.component";
import { Grade07paperComponent } from "./pastpaper-component/paperDisplaycom/grade07paper/grade07paper.component";
import { Grade11paperComponent } from "./pastpaper-component/paperDisplaycom/grade11paper/grade11paper.component";
import { Grade10paperComponent } from "./pastpaper-component/paperDisplaycom/grade10paper/grade10paper.component";
import { Grade09paperComponent } from "./pastpaper-component/paperDisplaycom/grade09paper/grade09paper.component";
import { Grade08paperComponent } from "./pastpaper-component/paperDisplaycom/grade08paper/grade08paper.component";
import { PaperdisplayComponent } from './pastpaper-component/paperdisplay/paperdisplay.component';
import { SigninComponent } from './admin/signin/signin.component';
import { SignupComponent } from './admin/signup/signup.component';
import { PaperDisComponent } from './pastpaper-component/paper-dis/paper-dis.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { Grade06Component } from './videoPaperDisplay/grade06/grade06.component';
import { Grade07Component } from './videoPaperDisplay/grade07/grade07.component';
import { Grade08Component } from './videoPaperDisplay/grade08/grade08.component';
import { Grade09Component } from './videoPaperDisplay/grade09/grade09.component';
import { Grade10Component } from './videoPaperDisplay/grade10/grade10.component';
import { Grade11Component } from './videoPaperDisplay/grade11/grade11.component';
import { AdminGuard } from './shared/admin.guard';
import { TeacherAuthGuard } from './teacher-auth.guard';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { PremiumGuard } from './premium.guard';
import { AdminDatailsComponent } from './admin/admin-datails/admin-datails.component';
import { Register2Component } from './register2/register2.component';
import { DiscussionPanelComponent } from './discussion-panel/discussion-panel.component';
import { AnnounceViewComponent } from './announcement/announce-view/announce-view.component';
import { AnnounceCreateComponent } from './announcement/announce-create/announce-create.component';
import { McqComponent } from './mcq/mcq.component';
import { McqSubjectsComponent } from './mcq/mcq-subjects/mcq-subjects.component';
import { McqQuizComponent } from './mcq/mcq-quiz/mcq-quiz.component';
import { McqAddComponent } from './mcq/mcq-add/mcq-add.component';
import { McqDeleteComponent } from './mcq/mcq-delete/mcq-delete.component';
import { UserImagesComponent } from './user-images/user-images.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ViewAboutComponent } from './view-about/view-about.component';
import { McqReportHandlerComponent } from './mcq/mcq-report-handler/mcq-report-handler.component';
import { AnncodeleteComponent } from './announcement/anncodelete/anncodelete.component';
McqReportHandlerComponent

const routes: Routes = [
  { path :'', redirectTo : '/home' , pathMatch : 'full'},
  { path :'events' , component : EventsComponent},
  { path :'register' , component : RegisterComponent},
  { path :'login', component : LoginComponent },
  { path :'special' , component : SpecialEventsComponent  },
  { path :'about' , component : AboutComponent},
  { path :'aboutUs' , component : AboutUsComponent},
{path:'ViewAbout',component:ViewAboutComponent },

  {path :'home' , component : HomeComponent},
  { path : 'messages-inbox', component : MessagesInboxComponent},
  { path : 'contact-us', component : ContactUsComponent},
  { path : 'user-profile', component : UserProfileComponent},
  { path : 'reset-password', component : ResetPasswordComponent },
  { path : 'resgisterAsStudent', component: Register2Component },
  { path : 'discussion-panel', component: DiscussionPanelComponent},
  { path : 'user-image', component : UserImagesComponent},


  { path :'app-dashboard',component:DashboardComponent ,canActivate : [AdminGuard]},
  { path :'app-video-upload',component:VideoUploadComponent, canActivate: [TeacherAuthGuard]},
  { path :'app-paper-upload',component:PaperUploadComponent, canActivate: [TeacherAuthGuard]},
  { path :'app-create-profile',component:CreateProfileComponent},
  { path :'app-all-profiles',component:AllProfilesComponent},

  { path :'app-update-post',component:UpdatePostComponent},
   {path:'app-root',component:AppComponent},
   {path:'app-video-page',component:VideoUploadComponent},
   { path :'video-detail', component:VideoDetailComponent},
  { path :'video-list',component:VideoListComponent},
  { path :'videos',component:VideoCenterComponent},
  {path:'app-paper',component:PaperComponent},
{path:'app-paper-upolad',component:PaperUploadComponent},
{path:'app-pastpaper-center',component:PastpaperCenterComponent},
{path:'app-pastpaper-detail',component:PastpaperDetailComponent},
{path:'app-pastpaper-list',component:PastpaperListComponent},
//{path:'app-video-upload-grade06',component:VideoUploadGrade06Component},
{path:'app-video-upload-grade',component:VideoUploadGradeComponent},
{path:'app-video-page-grade',component:VideoPageGradeComponent},
{path:'app-videodisplay',component:VideodisplayComponent, canActivate : [PremiumGuard] },
{path:'app-videodislpay07',component:Videodislpay07Component, canActivate : [PremiumGuard]},
{path:'app-videoupload07',component:Videoupload07Component},
{path:'app-videoupload06',component:Videoupload06Component},
{path:'app-videoupload8',component:Videoupload8Component},
{path:'app-videoupload9',component:Videoupload9Component},
{path:'app-videoupload10',component:Videoupload10Component},
{path:'app-videoupload11',component:Videoupload11Component},
//{path:'app-videoupload06',component:Videoupload06Component},
{path:'app-videoddisplay8',component:Videoddisplay8Component, canActivate : [PremiumGuard]},
{path:'app-videoddisplay9',component:Videoddisplay9Component, canActivate : [PremiumGuard]},
{path:'app-videoddisplay10',component:Videoddisplay10Component, canActivate : [PremiumGuard]},
{path:'app-videoddisplay11',component:Videoddisplay11Component, canActivate : [PremiumGuard]},
{path:'app-upload-files',component:UploadFilesComponent},
{ path: "app-user-details", component: UserDetailsComponent },
{ path: "app-paperdisplay", component: PaperdisplayComponent },

{ path: "app-grade06paper", component: Grade06paperComponent, canActivate:[AuthGuard] },
{ path: "app-grade07paper", component: Grade07paperComponent , canActivate:[AuthGuard]},
{ path: "app-grade08paper", component: Grade08paperComponent , canActivate:[AuthGuard]},
{ path: "app-grade09paper", component: Grade09paperComponent , canActivate:[AuthGuard]},
{ path: "app-grade10paper", component: Grade10paperComponent , canActivate:[AuthGuard]},
{ path: "app-grade11paper", component: Grade11paperComponent , canActivate:[AuthGuard]},

{ path: "app-paperupload06", component: Paperupload06Component },
{ path: "app-paperupload07", component: Paperupload07Component },
{ path: "app-paperupload08", component: Paperupload08Component },
{ path: "app-paperupload09", component: Paperupload09Component },
{ path: "app-paperupload10", component: Paperupload10Component },
{ path: "app-paperupload11", component: Paperupload11Component },
{ path: "log-in", component: SigninComponent },
{ path: "sign-up", component: SignupComponent },
{ path: "app-paper-dis", component: PaperDisComponent },
{ path: "grade06", component: Grade06Component },
{ path: "grade07", component: Grade07Component },
{ path: "grade08", component: Grade08Component },
{ path: "grade09", component: Grade09Component },
{ path: "grade10", component: Grade10Component },
{ path: "grade11", component: Grade11Component },
{ path: "admin-datails", component: AdminDatailsComponent },
{ path: "app-announce-view", component: AnnounceViewComponent },
{ path: "app-announce-create", component: AnnounceCreateComponent },
{ path: "announcedelete", component: AnncodeleteComponent },

{path: "mcq", component:McqComponent},
{path : "mcq-subjects/:grade", component : McqSubjectsComponent , canActivate:[AuthGuard]},
{path : "mcq-add/:grade/:subject", component : McqAddComponent , canActivate: [TeacherAuthGuard]},
{path : "mcq-quiz/:grade/:subject", component : McqQuizComponent},
{path: "mcq-delete/:grade/:subject", component: McqDeleteComponent, canActivate: [TeacherAuthGuard]},
{path: "mcq-report-handler", component: McqReportHandlerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
