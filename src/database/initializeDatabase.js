export async function initializeDatabase(database){
    try{
    await database.execAsync(`
        DROP TABLE IF EXISTS users;
    
        CREATE TABLE IF NOT EXISTS users(
        
        );
        `)
    }catch (error) {
        console.log(error);
    }
    }