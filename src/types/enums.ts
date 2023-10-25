export enum AuthModalTypes {
  Login,
  Signup,
  ResetPassword,
}

export enum AuthModalTitles {
  Login = 'Log in',
  Signup = 'Sign up',
  ResetPassword = 'Reset password',
}

export enum CommunityTypes {
  Public = 'Public',
  Restricted = 'Restricted',
  Private = 'Private',
}

export enum CommunityDescription {
  Public = 'Anyone can view, post, and comment this community',
  Restricted = 'Anyone can view, but only approved users can post',
  Private = 'Only approved users can view and submit to this community',
}
