import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Profile} from '../models/profile.models';
import {PROFILE_LIST} from '../mocks/profiles-list.mock';
import {serverUrl} from '../../configs/server.config';
import { Handicap } from '../models/handicap.models';

@Injectable({
    providedIn: 'root'
})

export class ProfileService {

  private profiles: Profile[] = PROFILE_LIST;

  private URL : string = serverUrl+"/profiles";
  public profiles$: BehaviorSubject<Profile[]> = new BehaviorSubject(this.profiles);
  public currentTrouble:Handicap;

  constructor(private http:HttpClient) {
    this.setProfilesFromUrl()
  }

  addProfile(profile: Profile) {
    this.profiles.push(profile);
    this.profiles$.next(this.profiles);
  }

  deleteProfile(profile: Profile) {
    this.profiles.splice(this.profiles.indexOf(profile,1));
    this.profiles$.next(this.profiles);
  }

  setProfilesFromUrl(){
    this.http.get<Profile[]>(this.URL).subscribe((profiles) =>{
      this.profiles = profiles;
      this.profiles$.next(this.profiles);
    });
  }

}

