import React from "react";
import Card from "react-bootstrap/esm/Card";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

function Welcome() {
  return (
    <Container className="shadow p-3 mb-5 bg-body rounded">
      <Row>
        <Col md={12}>
          <div className="fs-2 text-center mt-3">
            Welcome to Reviews web-portal
          </div>
          <Card>
            <Card.Body>
              Video game reviews tend to be dominated by people who treat every
              minor gripe as a world-shattering betrayal of artistic standards.
              Story cliches, technical issues, laziness with game mechanics, and
              so forth are very touchy subjects for people who know enough about
              games to spot every detail. On one hand, it is good when they call
              out the kind of bullshit that less experienced players may swallow
              - mediocre level design and overdone storytelling, for instance,
              is hard to spot unless you already have a trained critical eye
              that is already looking for things to either praise or criticize.
              But on the other hand, holy fuck is it annoying to hear someone
              treat any game that isn’t an absolute masterpiece as if it’s a
              dumpster fire. Which is pretty much what always happens with the
              most popular reviewers, primarily because it’s the most fun and
              engaging kind of criticism to create or experience. Movies do
              suffer from this as well, but since they’ve been in the mainstream
              for much longer than video games, people tend to have an easier
              time of noticing when a critic is going too far. Plenty of
              instances have been had when a crowd-favorite film finds zero
              sympathy from critics, and vice versa. Furthermore, video game
              criticism as an industry has had its own share of controversies
              holding it back from gaining immense visibility; Gamergate, for
              instance, an event that initially started as people accusing big
              review sites of being paid off by video game companies to
              consistently give them good reviews, was soon spun into a
              completely unrelated attack on female gamers and reviewers, thus
              taking the focus away from a systemic problem in the industry that
              has yet to be completely resolved to this day. Movies and movie
              reviews themselves have existed too long for any similar crisis to
              have the power to derail its purpose like this. Book reviews are
              practically a niche at this point. There’s Goodreads and similar
              communities, there’s “BookTube” (the videos on YouTube dedicated
              to reviewing books), and there are a few mildly successful blogs
              and such. It’s much harder to evaluate the standards of criticism
              there because it’s very far from the mainstream eye. Even with
              that aside, books themselves have fewer complexities to delve
              into; you can evaluate language choice and quality of
              storytelling, for instance, but you don’t have to talk about
              cinematography or playing mechanics like you would for the other
              two mediums. If we had a better sample size of book criticism, we
              should expect it to be much simpler than that of movies and video
              games for these reasons.
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Welcome;
