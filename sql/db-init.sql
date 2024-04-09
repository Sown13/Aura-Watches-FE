create database aura_watches;

use aura_watches;

create table if not exists products (
	id int primary key auto_increment,
    name varchar(255),
    description varchar(1000),
    price float default(100000),
    quantity int default(0),
    sale int check( sale >= 0 and sale <=100) default (0),
    img text,
    is_active int not null default 0
);

create table if not exists category (
	id int primary key auto_increment,
    name varchar(255)
);

create table if not exists product_category (
	id int primary key auto_increment,
    product_id int,
    category_id int,
    foreign key (product_id) references products(id),
    foreign key (category_id) references category(id)
);

create table if not exists users (
	id int primary key auto_increment,
    username varchar(255) not null unique,
    passoword varchar(60) not null,
    first_name varchar(255),
    last_name varchar(255),
    birth datetime,
    email varchar(255),
    address varchar(255),
    phone varchar(20)
);

create table if not exists cart (
	id int primary key auto_increment,
    product_id int not null,
    user_id int not null,
    foreign key (user_id) references users(id),
    foreign key (product_id) references products(id),
    quantity int not null default 1 
);

create table if not exists transactions (
	id int primary key auto_increment,
    product_id int not null,
    user_id int not null,
    quantity int not null,
    price float not null,
    date_created datetime default current_timestamp(),
    address varchar(255),
    foreign key (user_id) references users(id),
    foreign key (product_id) references products(id)
);

select * from products;
select * from category;
select * from product_category;


drop database aura_watches;
