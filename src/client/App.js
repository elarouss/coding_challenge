import React, { Component } from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link
} from 'react-router-dom';
import {
  Button, Form, Grid, Header, Message, Segment, Card, Image
} from 'semantic-ui-react';
import './app.css';

const FormHeader = ({ text }) => (
  <Header as="h2" color="blue" textAlign="center">
    {text}
  </Header>
);

const FormInput = ({ icon, placeholder, type }) => (
  <Form.Input fluid icon={icon} iconPosition="left" placeholder={placeholder} type={type} />
);

const FormButton = ({ text }) => (
  <Button color="blue" fluid size="large">
    {text}
  </Button>
);

const FormMessage = ({ text, linkUrl, linkText }) => (
  <Message>
    {text}
    {' '}
    <Link to={linkUrl}>{linkText}</Link>
  </Message>
);

const FormContainer = ({ children }) => (
  <div className="form-container">
    <Grid verticalAlign="middle">
      <Grid.Column>{children}</Grid.Column>
    </Grid>
  </div>
);

const RegisterForm = () => (
  <FormContainer>
    <FormHeader text="Create A New Account" />
    <Form size="large">
      <Segment stacked>
        <FormInput icon="user" placeholder="Email address" type="text" />
        <FormInput icon="lock" placeholder="Password" type="password" />
        <FormInput icon="lock" placeholder="Password Again" type="password" />
        <FormButton text="Sign Up" />
      </Segment>
    </Form>
    <FormMessage text="Already a member?" linkUrl="/login" linkText="Login" />
  </FormContainer>
);

const LoginForm = () => (
  <FormContainer>
    <FormHeader text="Login To Your Account" />
    <Form size="large">
      <Segment stacked>
        <FormInput icon="user" placeholder="Email address" type="text" />
        <FormInput icon="lock" placeholder="Password" type="password" />
        <FormButton text="Login" />
      </Segment>
    </Form>
    <FormMessage text="New Here? " linkUrl="/register" linkText="Sign up" />
  </FormContainer>
);

// cards
const GeneralCard = ({ header, img, children }) => (
  <Card>
    <Card.Content header={header} />
    <Image src={img} />
    <Card.Content extra>{children}</Card.Content>
  </Card>
);

const LikeDislikeBtns = () => (
  <div style={{ display: 'flex', justifyContent: 'space-around' }}>
    <Button content="Dislike" icon="thumbs down" labelPosition="left" />
    <Button content="Like" icon="thumbs up" labelPosition="left" />
  </div>
);

const RemoveBtn = () => (
  <div>
    <Button content="Remove" icon="trash" labelPosition="left" />
  </div>
);

const NormalShopCard = ({ header, img }) => (
  <GeneralCard header={header} img={img}>
    <LikeDislikeBtns />
  </GeneralCard>
);

const PreferredShopCard = ({ header, img }) => (
  <GeneralCard header={header} img={img}>
    <RemoveBtn />
  </GeneralCard>
);

// pages
const RegisterPage = () => (
  <div id="register-page" className="page">
    <RegisterForm />
  </div>
);

const LoginPage = () => (
  <div id="login-page" className="page">
    <LoginForm />
  </div>
);

const NearShops = () => (
  <div>
    <h1>Home page</h1>
    <Link to="/register">register</Link>
    <Link to="/login">login</Link>
    <br />
    <NormalShopCard
      header="Shop 1 card"
      img="https://react.semantic-ui.com/images/avatar/large/matthew.png"
    />

    <PreferredShopCard
      header="Shop 1 card"
      img="https://react.semantic-ui.com/images/avatar/large/matthew.png"
    />
  </div>
);

const NotFound = () => <h1> NOT FOUND :(</h1>;

const Main = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={NearShops} />
      <Route exact path="/register" component={RegisterPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

const App = () => <Main />;

export default App;
