//Important setup need to be done first before importing app related files.
import { Environment, Sangjog } from "sangjog";
Environment.setup();


//App started from here
import Application from "./src/Application";
Sangjog.register(Application);
Sangjog.run();
