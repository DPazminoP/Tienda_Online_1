import * as SQLite from "expo-sqlite";
let db;

export const initDB = async () => {
    if (!db) {
        db = await SQLite.openDatabaseAsync("tienda.db");

    // Tabla de usuarios
        await db.execAsync(`
        CREATE TABLE IF NOT EXISTS usuarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT,
            usuario TEXT,
            correo TEXT,
            contrasena TEXT,
            telefono TEXT
        );
        `);

        // Tabla de sesión
        await db.execAsync(`
        CREATE TABLE IF NOT EXISTS sesion (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            usuario_id INTEGER,
            activo INTEGER
        );
        `);
    }
};

// Asegurar que la base esté lista antes de usarla
const ensureDB = async () => {
    if (!db) {
        await initDB();
    }
};

// Insertar usuario
export const registrarUsuarioLocal = async (nombre, usuario, correo, contrasena, telefono) => {
    await ensureDB();
    await db.runAsync(
        "INSERT INTO usuarios (nombre, usuario, correo, contrasena, telefono) VALUES (?, ?, ?, ?, ?);",
        [nombre, usuario, correo, contrasena, telefono]
    );
    console.log("Usuario guardado localmente");
};

// Consultar todos los usuarios
export const obtenerUsuarios = async () => {
    await ensureDB();
    const result = await db.getAllAsync("SELECT * FROM usuarios;");
    return result;
};

// Verificar duplicados por usuario o correo
export const verificarUsuarioOCorreo = async (usuario, correo) => {
    await ensureDB();
    const result = await db.getAllAsync(
        "SELECT * FROM usuarios WHERE usuario = ? OR correo = ?;",
        [usuario, correo]
    );
    return result.length > 0;
};

// Guardar sesión activa
export const iniciarSesionLocal = async (usuario_id) => {
    await ensureDB();
    await db.execAsync("DELETE FROM sesion;"); // limpiar sesiones previas
    await db.runAsync("INSERT INTO sesion (usuario_id, activo) VALUES (?, ?);", [usuario_id, 1]);
};

// Verificar sesión activa
export const verificarSesionLocal = async () => {
    await ensureDB();
    const result = await db.getAllAsync("SELECT * FROM sesion WHERE activo = 1;");
    return result.length > 0 ? result[0].usuario_id : null;
};

// Cerrar sesión
export const cerrarSesionLocal = async () => {
    await ensureDB();
    await db.execAsync("DELETE FROM sesion;");
};

// Obtener usuario por ID (para mostrar nombre en catálogo)
export const obtenerUsuarioPorId = async (id) => {
    await ensureDB();
    const result = await db.getAllAsync("SELECT * FROM usuarios WHERE id = ?;", [id]);
    return result.length > 0 ? result[0] : null;
    };