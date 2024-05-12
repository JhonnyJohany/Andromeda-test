--------------------------------------------------------
-- DDL DROP users for the andromeda database.
--------------------------------------------------------
DROP SCHEMA IF EXISTS andromeda CASCADE;

--------------------------------------------------------
-- DDL Create schema for the andromeda database.
--------------------------------------------------------
CREATE SCHEMA andromeda;

--------------------------------------------------------
-- DDL Create tables for the andromeda database.
--------------------------------------------------------
CREATE TABLE andromeda.users_prueba (
	id serial4 NOT NULL,
	username varchar UNIQUE NOT NULL,
	"password" varchar NOT NULL,
	CONSTRAINT users_prueba_pk PRIMARY KEY (id)
);

CREATE TABLE andromeda.btc_price (
	id serial4 NOT NULL,
	"Date" date NULL,
	"Open" float8 NULL,
	high float8 NULL,
	low float8 NULL,
	"Close" float8 NULL,
	CONSTRAINT btc_usd_pk PRIMARY KEY (id)
);

INSERT INTO andromeda.users_prueba (username,"password") VALUES
	 ('jhonny','050fb2c3c7ffde2cb85567801a1d1837'),
	 ('andromeda','050fb2c3c7ffde2cb85567801a1d1837'),
	 ('prueba','7493f6624615a2ffb1f976f876820e9f'),
	 ('admin','050fb2c3c7ffde2cb85567801a1d1837');


INSERT INTO andromeda.btc_price ("Date","Open",high,low,"Close") VALUES
	 ('2014-12-31',310.914001,320.192993,310.210999,320.192993),
	 ('2015-12-31',425.875,432.92099,418.734985,430.566986),
	 ('2016-12-31',960.627014,963.742981,947.236023,963.742981),
	 ('2017-12-31',12897.700195,14377.400391,12755.599609,14156.400391),
	 ('2018-12-31',3866.839111,3868.74292,3725.867432,3742.700439),
	 ('2019-12-31',7294.438965,7335.290039,7169.777832,7193.599121),
	 ('2020-12-31',28841.574219,29244.876953,28201.992188,29001.720703),
	 ('2021-12-01',46311.746094,47827.3125,46288.484375,47686.8125),
	 ('2022-12-19',40022.132813,40246.027344,40010.867188,40126.429688);
