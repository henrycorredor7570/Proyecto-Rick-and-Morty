const app = require("../src/app");
const session = require("supertest");
const request = session(app);
//OBJETO EJEMPLO PARA RECORRER PROPIEDADES
const obj = {
    id: 234,
    name: "Henry",
    species: "Human",
    origin: {
        name: "Earth (C-137)"
    },
    image: "image.jpg",
    gender: "Female",
    status: "Alive"
}

describe("test de RUTAS", () => {
    describe("GET /rickandmorty/character/:id", () => {
        it("Responde con status: 200", async () => {
            const response = await request.get('/rickandmorty/character/1');
            expect(response.statusCode).toBe(200);
        });
        it("Responde un objeto con las propiedades: 'id', 'name', 'species', 'gender', 'status', 'origin' e 'image'", async () => {
            const response = await request.get('/rickandmorty/character/1');
            // console.log(response.body);
            // expect(response.body).toHaveProperty('id')
            // expect(response.body).toHaveProperty('name')
            // expect(response.body).toHaveProperty('species')
            // expect(response.body).toHaveProperty('gender')
            // expect(response.body).toHaveProperty('status')
            // expect(response.body).toHaveProperty('origin')
            // expect(response.body).toHaveProperty('image')

            // Recorro las propiedades del objeto ejemplo y las comparo con las que me llegan en response
            for(const prop in obj){
                expect(response.body).toHaveProperty(prop)
            }
        });

        it("Si hay un error responde con status: 500", async () => {
            const response = await request.get('/rickandmorty/character/3209h');
            expect(response.statusCode).toBe(500);
        });
    });

    describe("GET /rickandmorty/login", () => {
        it("Responde con un objeto con la propiedad access en true si la información del usuario es válida", async () => {
            const response = await request.get("/rickandmorty/login?email=henry@gmail.com&password=real10");
            const access = { access:true};
            expect(response.body).toEqual(access);
        })
        it("Responde con un objeto con la propiedad access en false si la información del usuario NO es válida", async () => {
            const response = await request.get("/rickandmorty/login?email=henry@mail.com&password=real10");
            const access = { access:false};
            expect(response.body).toEqual(access);
        })
    });

    describe("POST /rickandmorty/fav", () => {
        it("Debe guardar el personaje en favoritos", async () => {
            const response = await request.post("/rickandmorty/fav").send(obj);
            expect(response.body).toContainEqual(obj);
        });

        it("Debe agregar personajes a favoritos sin eliminar los existentes", async () => {
            obj.id = 1298;
            obj.name = "FT 39b";
            const response = await request.post("/rickandmorty/fav").send(obj);
            expect(response.body.length).toBe(2);
        })
    })

    describe("DELETE /rickandmorty/fav/:id", () => {
        it("Si el ID solicitado no existe, debería retornar un arreglo con todos los favoritos", async () => {
            const response = await request.delete("/rickandmorty/fav/45qs4");
            expect(response.body.length).toBe(2);
        })
        it("Si el ID enviado existe, debería eliminarlo de favoritos", async () => {
            const response = await request.delete("/rickandmorty/fav/234");
            expect(response.body.length).toBe(1);
        })
    })
})