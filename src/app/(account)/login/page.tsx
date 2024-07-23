export default function Login() {
  return (
    <>
      <h1 className="flex flex-col text-3xl items-center m-8">Iniciar Sesión</h1>
      <a href="/registro">
        <h3 className="flex flex-col text-3xl items-center m-8">Crear cuenta</h3>
      </a>
      <a href="/password">
        <h3 className="flex flex-col text-3xl items-center m-8">Olvidé mi contraseña</h3>
      </a>
      <h3 className="flex flex-col text-lg font-mono items-center m-8 bg-gray-400">
        <code>
          metadata (title) por <em>default</em>
        </code>
      </h3>
    </>
  );
}
