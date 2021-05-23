interface IConfig {
    port: number;
    graphqlURL: string;
    adminKey: string;
    jwtSecret: string;
};


const parseEnv = <T extends string | number>(value: string | undefined, defaultValue: T,):T => {
    if(!value) return defaultValue;

    if(typeof defaultValue === "number"){
        return Number(value) as T;
    }

    return value as T;
};

export const config: IConfig = {
    port: parseEnv(process.env.BLOGSURA_NODE_PORT, 3000),
    graphqlURL: parseEnv(process.env.BLOGSURA_HASURA_URL, "http://localhost:8080/v1/graphql"),
    adminKey: parseEnv(process.env.BLOGSURA_ADMIN_KEY, "myadminsecretkey"),
    jwtSecret: parseEnv(process.env.BLOGSURA_JWT_SECRET, "jwtsecretehmacbase64here")
}
