USE Comercializadora;
-- ***** USUARIO *****
-- ** Procedimiento almacenado para listar USUARIOS
DELIMITER //
CREATE PROCEDURE spListarUsuarios()
BEGIN
	SELECT Id, Usuario, Nombre, Clave, IdRol, Activo
		FROM Usuario
		ORDER BY Usuario;
END//
-- ** Procedimiento almacenado para agregar o modificar USUARIO

CREATE PROCEDURE spActualizarUsuario(
IN IdUsuario int,
IN Usuario varchar(100),
IN Nombre varchar(100),
IN Clave varchar(50),
IN IdRol int,
IN Activo bool
)
BEGIN
	IF IdUsuario<=0 THEN
		INSERT INTO Usuario
			(
			Usuario, Nombre, Clave, IdRol, Activo
			)
			VALUES(
			Usuario, Nombre, Clave, IdRol, Activo
			);
	ELSE
		UPDATE Usuario
			SET Usuario = Usuario,
			Nombre = Nombre,
			Clave = Clave, 
			IdRol = IdRol,
            Activo = Activo
			WHERE Id =  IdUsuario;
	END IF;
END//