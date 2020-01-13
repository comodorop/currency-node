CREATE TABLE appcurrency.withdrawal (
	id INT auto_increment NOT NULL,
	currency varchar(100) NOT NULL,
	amount FLOAT NOT NULL,
	created_at DATE NOT NULL,
	CONSTRAINT payments_PK PRIMARY KEY (id)
)
ENGINE=InnoDB
DEFAULT CHARSET=latin1
COLLATE=latin1_swedish_ci;
