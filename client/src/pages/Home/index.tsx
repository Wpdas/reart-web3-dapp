import {
  Footer,
  Gradients,
  Navbar,
  Services,
  Transactions,
  Welcome,
} from '@app/components';

const Home: React.FC = () => {
  return (
    <div>
      <Gradients.GradientBgWelcome>
        <Navbar />
        <Welcome />
      </Gradients.GradientBgWelcome>
      <Gradients.GradientBgServices>
        <Services />
      </Gradients.GradientBgServices>
      <Gradients.GradientBgTransactions>
        <Transactions />
      </Gradients.GradientBgTransactions>
      <Footer />
    </div>
  );
};

export default Home;
