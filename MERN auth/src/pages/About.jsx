export default function About() {
  return (
    <div className="px-4 py-12 max-w-2xl mx-auto text-justify">
      <h1 className="text-3xl font-bold  mb-6 text-slate-800">About</h1>

      <p className="mb-4 text-slate-700">
        <span className="font-bold">Frontend Setup:</span> We commence by
        installing React.js and seamlessly integrating Tailwind CSS. Delved into
        the power of React Router Dom's newest release to establish a robust
        routing system and create authentication pages.
      </p>
      <p className="mb-4 text-slate-700">
        <span className="font-bold">Authentication Mastery:</span> Our
        application supports email and password authentication with JSON Web
        Tokens, delivering secure user experiences. Additionally, I use
        the integration of Google OAuth for seamless sign-ins.
      </p>
      <p className="mb-4 text-slate-700">
        <span className="font-bold">
          Efficient State Management with Redux Toolkit:
        </span>{" "}
        Discovered the convenience of Redux Toolkit for streamlined state
        management, enabling you to effortlessly maintain global states.
      </p>
      <p className="mb-4 text-slate-700">
        <span className="font-bold">Ironclad Profile Pages:</span> Certain
        pages, such as the profile page, receive dual layers of protection –
        both on the client and backend sides – ensuring the utmost security for
        your application.
      </p>
      <p className="mb-4 text-slate-700">
        <span className="font-bold">Dynamic Profile Management:</span> Unleash
        the power to update user profiles, encompassing usernames, emails, and
        passwords. Im even delve into image profile updates utilising
        Firebase Storage.
      </p>
      <p className="mb-4 text-slate-700">
        <span className="font-bold">Account Deletion:</span> Learned the art of
        safely deleting user accounts, complete with checks for JSON Web Token
        cookies.
      </p>
      <p className="mb-4 text-slate-700">
        <span className="font-bold">Masterful CRUD Operations:</span> Dived into
        the intricacies of Create, Read, Update, and Delete (CRUD) operations
        using MongoDB, enabling you to interact effectively with database.
      </p>
      <p className="mb-4 text-slate-700">
        <span className="font-bold">Deployment and Sharing:</span> Finally,
         use Render to deploy my full-stack authentication app, all
        without cost.
      </p>
    </div>
  );
}
