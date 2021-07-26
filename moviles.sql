PGDMP     ;    0                y            proyectofinal    12.7    12.7 (    @           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            A           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            B           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            C           1262    16441    proyectofinal    DATABASE     �   CREATE DATABASE proyectofinal WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_United States.1252' LC_CTYPE = 'English_United States.1252';
    DROP DATABASE proyectofinal;
                postgres    false            �            1259    24641    driver    TABLE     �  CREATE TABLE public.driver (
    d_id integer NOT NULL,
    d_name character varying NOT NULL,
    d_lastname character varying NOT NULL,
    d_password character varying NOT NULL,
    d_licenseplate character varying NOT NULL,
    d_pic bytea NOT NULL,
    d_vehiclemodel character varying NOT NULL,
    d_vehiclecolor character varying NOT NULL,
    d_created_at timestamp without time zone NOT NULL,
    d_uptaded_at timestamp without time zone NOT NULL,
    d_email character varying NOT NULL
);
    DROP TABLE public.driver;
       public         heap    postgres    false            �            1259    24649    establishement    TABLE     �  CREATE TABLE public.establishement (
    e_id integer NOT NULL,
    e_name character varying NOT NULL,
    e_direction character varying NOT NULL,
    e_latitude character varying NOT NULL,
    e_available boolean NOT NULL,
    e_longitude character varying NOT NULL,
    e_email character varying NOT NULL,
    e_uptaded_at timestamp without time zone NOT NULL,
    e_foto bytea NOT NULL,
    e_created_at timestamp without time zone NOT NULL,
    e_password character varying NOT NULL
);
 "   DROP TABLE public.establishement;
       public         heap    postgres    false            �            1259    24659    product    TABLE     A  CREATE TABLE public.product (
    p_id integer NOT NULL,
    p_name character varying NOT NULL,
    e_id integer NOT NULL,
    p_price character varying NOT NULL,
    p_description character varying NOT NULL,
    p_created_ad timestamp without time zone NOT NULL,
    p_uptaded_at timestamp without time zone NOT NULL
);
    DROP TABLE public.product;
       public         heap    postgres    false            �            1259    24657    product_p_id_seq    SEQUENCE     y   CREATE SEQUENCE public.product_p_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.product_p_id_seq;
       public          postgres    false    206            D           0    0    product_p_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.product_p_id_seq OWNED BY public.product.p_id;
          public          postgres    false    205            �            1259    24687    product_purchase    TABLE     >  CREATE TABLE public.product_purchase (
    p_id integer NOT NULL,
    pur_id integer NOT NULL,
    pp_id integer NOT NULL,
    pp_pricepurchase character varying NOT NULL,
    pp_created_at timestamp without time zone NOT NULL,
    pp_amount integer NOT NULL,
    pp_uptaded_at timestamp without time zone NOT NULL
);
 $   DROP TABLE public.product_purchase;
       public         heap    postgres    false            �            1259    24679    purchase    TABLE     �  CREATE TABLE public.purchase (
    pur_id integer NOT NULL,
    u_id integer NOT NULL,
    pur_comment character varying NOT NULL,
    d_id integer NOT NULL,
    e_id integer NOT NULL,
    ps_id integer NOT NULL,
    pur_created_at timestamp without time zone NOT NULL,
    pur_status_purchase character varying NOT NULL,
    pur_longitude character varying NOT NULL,
    pur_uptaded_at timestamp without time zone NOT NULL,
    pur_latitude character varying NOT NULL
);
    DROP TABLE public.purchase;
       public         heap    postgres    false            �            1259    24633    purchase_status    TABLE     l   CREATE TABLE public.purchase_status (
    ps_id integer NOT NULL,
    ps_name character varying NOT NULL
);
 #   DROP TABLE public.purchase_status;
       public         heap    postgres    false            �            1259    24670    user_1    TABLE     M  CREATE TABLE public.user_1 (
    u_id integer NOT NULL,
    u_lastname character varying NOT NULL,
    u_name character varying NOT NULL,
    u_password character varying NOT NULL,
    u_created_at timestamp without time zone NOT NULL,
    u_uptaded_at timestamp without time zone NOT NULL,
    u_email character varying NOT NULL
);
    DROP TABLE public.user_1;
       public         heap    postgres    false            �            1259    24668    user_1_u_id_seq    SEQUENCE     x   CREATE SEQUENCE public.user_1_u_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.user_1_u_id_seq;
       public          postgres    false    208            E           0    0    user_1_u_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.user_1_u_id_seq OWNED BY public.user_1.u_id;
          public          postgres    false    207            �
           2604    24662    product p_id    DEFAULT     l   ALTER TABLE ONLY public.product ALTER COLUMN p_id SET DEFAULT nextval('public.product_p_id_seq'::regclass);
 ;   ALTER TABLE public.product ALTER COLUMN p_id DROP DEFAULT;
       public          postgres    false    206    205    206            �
           2604    24673    user_1 u_id    DEFAULT     j   ALTER TABLE ONLY public.user_1 ALTER COLUMN u_id SET DEFAULT nextval('public.user_1_u_id_seq'::regclass);
 :   ALTER TABLE public.user_1 ALTER COLUMN u_id DROP DEFAULT;
       public          postgres    false    207    208    208            6          0    24641    driver 
   TABLE DATA           �   COPY public.driver (d_id, d_name, d_lastname, d_password, d_licenseplate, d_pic, d_vehiclemodel, d_vehiclecolor, d_created_at, d_uptaded_at, d_email) FROM stdin;
    public          postgres    false    203   5       7          0    24649    establishement 
   TABLE DATA           �   COPY public.establishement (e_id, e_name, e_direction, e_latitude, e_available, e_longitude, e_email, e_uptaded_at, e_foto, e_created_at, e_password) FROM stdin;
    public          postgres    false    204   ;5       9          0    24659    product 
   TABLE DATA           i   COPY public.product (p_id, p_name, e_id, p_price, p_description, p_created_ad, p_uptaded_at) FROM stdin;
    public          postgres    false    206   X5       =          0    24687    product_purchase 
   TABLE DATA           z   COPY public.product_purchase (p_id, pur_id, pp_id, pp_pricepurchase, pp_created_at, pp_amount, pp_uptaded_at) FROM stdin;
    public          postgres    false    210   u5       <          0    24679    purchase 
   TABLE DATA           �   COPY public.purchase (pur_id, u_id, pur_comment, d_id, e_id, ps_id, pur_created_at, pur_status_purchase, pur_longitude, pur_uptaded_at, pur_latitude) FROM stdin;
    public          postgres    false    209   �5       5          0    24633    purchase_status 
   TABLE DATA           9   COPY public.purchase_status (ps_id, ps_name) FROM stdin;
    public          postgres    false    202   �5       ;          0    24670    user_1 
   TABLE DATA           k   COPY public.user_1 (u_id, u_lastname, u_name, u_password, u_created_at, u_uptaded_at, u_email) FROM stdin;
    public          postgres    false    208   �5       F           0    0    product_p_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.product_p_id_seq', 1, false);
          public          postgres    false    205            G           0    0    user_1_u_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.user_1_u_id_seq', 1, false);
          public          postgres    false    207            �
           2606    24648    driver driver_pk 
   CONSTRAINT     P   ALTER TABLE ONLY public.driver
    ADD CONSTRAINT driver_pk PRIMARY KEY (d_id);
 :   ALTER TABLE ONLY public.driver DROP CONSTRAINT driver_pk;
       public            postgres    false    203            �
           2606    24656     establishement establishement_pk 
   CONSTRAINT     `   ALTER TABLE ONLY public.establishement
    ADD CONSTRAINT establishement_pk PRIMARY KEY (e_id);
 J   ALTER TABLE ONLY public.establishement DROP CONSTRAINT establishement_pk;
       public            postgres    false    204            �
           2606    24667    product product_pk 
   CONSTRAINT     R   ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_pk PRIMARY KEY (p_id);
 <   ALTER TABLE ONLY public.product DROP CONSTRAINT product_pk;
       public            postgres    false    206            �
           2606    24694 $   product_purchase product_purchase_pk 
   CONSTRAINT     d   ALTER TABLE ONLY public.product_purchase
    ADD CONSTRAINT product_purchase_pk PRIMARY KEY (p_id);
 N   ALTER TABLE ONLY public.product_purchase DROP CONSTRAINT product_purchase_pk;
       public            postgres    false    210            �
           2606    24686    purchase purchase_pk 
   CONSTRAINT     V   ALTER TABLE ONLY public.purchase
    ADD CONSTRAINT purchase_pk PRIMARY KEY (pur_id);
 >   ALTER TABLE ONLY public.purchase DROP CONSTRAINT purchase_pk;
       public            postgres    false    209            �
           2606    24640 "   purchase_status purchase_status_pk 
   CONSTRAINT     c   ALTER TABLE ONLY public.purchase_status
    ADD CONSTRAINT purchase_status_pk PRIMARY KEY (ps_id);
 L   ALTER TABLE ONLY public.purchase_status DROP CONSTRAINT purchase_status_pk;
       public            postgres    false    202            �
           2606    24678    user_1 user_1_pk 
   CONSTRAINT     P   ALTER TABLE ONLY public.user_1
    ADD CONSTRAINT user_1_pk PRIMARY KEY (u_id);
 :   ALTER TABLE ONLY public.user_1 DROP CONSTRAINT user_1_pk;
       public            postgres    false    208            �
           2606    24700    purchase driver_purchase_fk    FK CONSTRAINT     z   ALTER TABLE ONLY public.purchase
    ADD CONSTRAINT driver_purchase_fk FOREIGN KEY (d_id) REFERENCES public.driver(d_id);
 E   ALTER TABLE ONLY public.purchase DROP CONSTRAINT driver_purchase_fk;
       public          postgres    false    2725    209    203            �
           2606    24710 !   product establishement_product_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.product
    ADD CONSTRAINT establishement_product_fk FOREIGN KEY (e_id) REFERENCES public.establishement(e_id);
 K   ALTER TABLE ONLY public.product DROP CONSTRAINT establishement_product_fk;
       public          postgres    false    2727    206    204            �
           2606    24705 #   purchase establishement_purchase_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.purchase
    ADD CONSTRAINT establishement_purchase_fk FOREIGN KEY (e_id) REFERENCES public.establishement(e_id);
 M   ALTER TABLE ONLY public.purchase DROP CONSTRAINT establishement_purchase_fk;
       public          postgres    false    209    204    2727            �
           2606    24715 ,   product_purchase product_product_purchase_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.product_purchase
    ADD CONSTRAINT product_product_purchase_fk FOREIGN KEY (p_id) REFERENCES public.product(p_id);
 V   ALTER TABLE ONLY public.product_purchase DROP CONSTRAINT product_product_purchase_fk;
       public          postgres    false    210    2729    206            �
           2606    24725 -   product_purchase purchase_product_purchase_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.product_purchase
    ADD CONSTRAINT purchase_product_purchase_fk FOREIGN KEY (pur_id) REFERENCES public.purchase(pur_id);
 W   ALTER TABLE ONLY public.product_purchase DROP CONSTRAINT purchase_product_purchase_fk;
       public          postgres    false    2733    209    210            �
           2606    24695 $   purchase purchase_status_purchase_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.purchase
    ADD CONSTRAINT purchase_status_purchase_fk FOREIGN KEY (ps_id) REFERENCES public.purchase_status(ps_id);
 N   ALTER TABLE ONLY public.purchase DROP CONSTRAINT purchase_status_purchase_fk;
       public          postgres    false    2723    209    202            �
           2606    24720    purchase user_purchase_fk    FK CONSTRAINT     x   ALTER TABLE ONLY public.purchase
    ADD CONSTRAINT user_purchase_fk FOREIGN KEY (u_id) REFERENCES public.user_1(u_id);
 C   ALTER TABLE ONLY public.purchase DROP CONSTRAINT user_purchase_fk;
       public          postgres    false    2731    208    209            6      x������ � �      7      x������ � �      9      x������ � �      =      x������ � �      <      x������ � �      5      x������ � �      ;      x������ � �     