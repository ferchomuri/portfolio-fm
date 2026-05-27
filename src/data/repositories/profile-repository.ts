import {
  PROFILE_SOURCE,
  type Profile,
} from "@/data/sources/profile-source";

export const getProfile = (): Profile => PROFILE_SOURCE;

export const PROFILE = PROFILE_SOURCE;
