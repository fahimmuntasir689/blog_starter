import { db } from "./prisma/db";

// GET
async function main() {
    const users = await db.orm.public.User.all()
    const posts = await db.orm.public.Post.all()
    console.log(users)
    console.log(posts)
}
main()
//POST
async function create() {
    const user = await db.orm.public.User.create({
        email: "name@example.com",
        username: "random name",
        name: "name",
    });

    const post = await db.orm.public.Post.create({
        title: "My First Prisma Post",
        content: "I am learning Prisma 8!",
        authorId: user.id,
    })

    console.log(user, post)

}

// create()

//UPDATE 
async function update() {

    const updatedUser = await db.orm.public.User
        .where((user) => user.id.eq(1))
        .update({
            username: "new_name",
        });

    console.log(updatedUser);

}

update()

// DELETE 

async function drop() {
    const drop = await db.orm.public.User.where((user)=>
        user.id.eq(1)).delete( )
    }

drop()