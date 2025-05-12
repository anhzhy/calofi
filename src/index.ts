import client from '@core/client';

async function bootstrap() {
    // client.commands = await loadCommands();
    // await loadEvents(client);
    await client.login(process.env.TOKEN);
}

bootstrap().catch((err) => {
    console.log(err);
    process.exit(1);
});
