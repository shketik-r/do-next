// import { Button } from "@/components/ui/button";

import { Container } from "@/components/shared/Container";
import { Title } from "@/components/shared/title";
import { TopBar } from "@/components/shared/topBar";

// import { Container, Title, TopBar } from "@/components/shared";

export default function Home() {
  return (
    <>

      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>

      <TopBar className="123" />


    </>
  );
}
