export const capitalizarNombre = (nombre: string): string => {
    return nombre.trim().toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
};

export const validarNombre = (nombre: string): string | null => {
    if (nombre.trim().length === 0) {
        return "El nombre no puede estar vacío.";
    }
    if (nombre.trim().length < 7) {
        return "El nombre debe tener al menos 7 caracteres.";
    }
    if (/^\s/.test(nombre)) {
        return "El nombre no puede comenzar con un espacio.";
    }
    if (/\d/.test(nombre)) {
        return "El nombre no puede contener números.";
    }
    if (/[^\w\s]/.test(nombre)) {
        return "El nombre no puede contener caracteres especiales o emojis.";
    }
    return null;
};

export const validarEmail = (email: string): string | null => {
    const emailRegex = /^[a-z]+[a-z0-9._-]*@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if (!emailRegex.test(email)) {
        return "El email no es válido. Debe contener '@', usar solo minúsculas, y tener un formato correcto.";
    }
    if (email.split('@').length > 2) {
        return "El email no puede contener múltiples '@'.";
    }
    if (/^[.-]|[.-]@|@[.-]|[.-]$/.test(email)) {
        return "El nombre de usuario o dominio no pueden comenzar ni terminar con puntos o guiones.";
    }
    return null;
};

export const validarMensaje = (mensaje: string): string | null => {
    if (mensaje.trim().length === 0) {
        return null; // El mensaje es opcional
    }
    if (mensaje.trim().length < 4) {
        return "El mensaje debe tener al menos 4 caracteres.";
    }
    if (mensaje.length > 100) {
        return "El mensaje no puede exceder los 100 caracteres.";
    }
    if (/^[^\w\s]/.test(mensaje)) {
        return "El mensaje no puede comenzar con caracteres especiales.";
    }
    if (/^\s+$/.test(mensaje)) {
        return "El mensaje no puede contener solo espacios en blanco.";
    }
    // Agregar más validaciones según sea necesario
    return null;
};

export const sanitizarInput = (input: string): string => {
    const replacements: { [key: string]: string } = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;'
    };

    return input.replace(/[&<>"']/g, (match) => replacements[match] || match);
};