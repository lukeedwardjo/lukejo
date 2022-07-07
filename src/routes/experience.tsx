export default function Experience() {
  return (
    <div className="flex items-center justify-center mt-6 ml-6 mr-6">
I became familiar with Node.js in college but gained most of my experience with it working with Apollo Server at my current workplace. I've written dozens of features built on top of our GraphQL API since I transitioned to the front-end team (React and GraphQL) in January 2021. When starting on this team the GraphQL schema and its resolvers lived in the client, but we have since separated our GraphQL onto its own servers.
</div>
<div className="flex items-center justify-center mt-6 ml-6 mr-6">
Our implementation of GraphQL includes TypeScript, Apollo Server, and GraphQL Code Generator (to translate GraphQL types to TypeScript types). We use GraphQL because we have many different APIs built with .NET Web API 2, Ruby on Rails, and OData. These APIs lack in documentation and in predicable behavior. Our only data sources for GraphQL are these REST APIs. We use Relay (Facebook's GraphQL client) for state management in our web applications.
</div>
<div className="flex items-center justify-center mt-6 ml-6 mr-6">
My workflow when writing a new feature in GraphQL begins with evaluating what new data the client will need how that data fits into GraphQL schema. For new data, I create TypeScript types of what we expect from the REST APIs and create the methods to fetch the data. Because we use GraphQL Code Generator, I add the TypeScript types to the code-gen.yml file. I then write the resolvers using the methods that fetch the data, and because we use GraphQL code Generator we get a lot of help from TypeScript when writing the resolvers.
</div>
<div className="flex items-center justify-center mt-6 ml-6 mr-6">
Overall, I think GraphQL is a very useful tool, especially for abstracting the data element and business logic away from the clients which only serves to make them more maintainable and nimbler.
    </div>
  );
}
