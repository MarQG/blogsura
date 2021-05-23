CREATE TABLE public."Account_Status" (
    value text NOT NULL,
    comment text NOT NULL
);
CREATE TABLE public."Article" (
    title text NOT NULL,
    message text NOT NULL,
    created_timestamp timestamp with time zone DEFAULT now() NOT NULL,
    edited_timestamp timestamp with time zone,
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    author uuid NOT NULL
);
CREATE TABLE public."Role" (
    value text NOT NULL,
    comment text NOT NULL
);
CREATE TABLE public."User" (
    first_name text NOT NULL,
    last_name text NOT NULL,
    email text NOT NULL,
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    created_timestamp timestamp with time zone DEFAULT now() NOT NULL,
    account_status text NOT NULL,
    role text NOT NULL
);
ALTER TABLE ONLY public."Account_Status"
    ADD CONSTRAINT "Account_Status_pkey" PRIMARY KEY (value);
ALTER TABLE ONLY public."Article"
    ADD CONSTRAINT "Article_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."Role"
    ADD CONSTRAINT "Role_pkey" PRIMARY KEY (value);
ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_email_key" UNIQUE (email);
ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."Article"
    ADD CONSTRAINT "Article_author_fkey" FOREIGN KEY (author) REFERENCES public."User"(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_account_status_fkey" FOREIGN KEY (account_status) REFERENCES public."Account_Status"(value) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_role_fkey" FOREIGN KEY (role) REFERENCES public."Role"(value) ON UPDATE CASCADE ON DELETE CASCADE;
