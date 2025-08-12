export default function Dashboard({ user }) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-xl font-semibold">
        Welcome, {user.email}
      </h1>
    </div>
  );
}
