export type RootStackParamList = {
  Intro: IntroStackParamList;
  Auth: {
    screen: keyof AuthStackParamList;
  };
  Main: {
    screen: keyof MainBottomStackList;
  };
  ContactDetails: undefined;

  EventDetails: undefined;
  AddEvents: undefined;
  ContactSearchScreen: undefined;
  EventSearchScreen: undefined;
  TransactionSearchScreen: undefined;
  SettleUp: {
    screen: keyof SettleUpStackParamList;
  };
  Profile: {
    screen: keyof ProfileStackParamList;
  };
  invitee: undefined;
};

export type IntroStackParamList = {
  Intro: undefined;
};

export type AuthStackParamList = {
  Login: undefined;
  SignUp: undefined;
  Profile: undefined;
  ForgotPassword: undefined;
  ChangePassword: undefined;
  OtherInformation: undefined;
};

export type EventStackParamList = {
  EventList: undefined;
  EventFilter: undefined;
};

export type SettleUpStackParamList = {
  SettleUpHomeScreen: undefined;
  EventSettleUpHomeScreen: undefined;
  SettleUpConfirmationScreen: undefined;
};

export type ProfileStackParamList = {
  ProfileDetails: undefined;
  Setting: undefined;
  Faq: undefined;
  Terms: undefined;
};
export type ContactStackParamList = {
  ContactDetails: undefined;
  ContactList: undefined;
  ContactFilter: undefined;
};

export type MainBottomStackList = {
  Events: undefined;
  Contacts: undefined;
  Transactions: undefined;
  Accounts: undefined;
  Add: undefined;
};

export interface EventProps {
  name?: string;
  status?: string;
  amount?: number;
  id?: number;
}

export interface ContactSettleListProps {
  name?: string;
  status?: string;
  email?: string;
  amount?: number;
  id?: number;
}

export interface EventDetailsProps {
  name?: string;
  status?: string;
  amount?: number;
  date?: string;
  id?: number;
}

export interface ContactProps {
  title?: string;
  status?: string;
  amount?: number;
  id?: number;
}
