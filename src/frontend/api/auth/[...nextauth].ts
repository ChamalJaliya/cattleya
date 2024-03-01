import NextAuth from 'next-auth'
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: "Email", type: "email", placeholder: "email@example.com" },
        password: { label: "Password", type: "password" },
        name: { label: "Name", type: "text" },
      },
      async authorize(credentials) {
        // Add your logic to validate the user credentials.  
        // You'll likely connect to your database here

        // Simplified example for demonstration:
        if (credentials.email === 'user@test.com' && credentials.password === 'password') {
          // Return the user object if valid
          return { 
              id: 1, 
              name: credentials.name, 
              email: credentials.email 
          };  
        }

        // Return null if the user is not found or invalid 
        return null; 
      }
    })
  ],
  // Other NextAuth.js options if needed (callbacks, session customization, etc.)
})
