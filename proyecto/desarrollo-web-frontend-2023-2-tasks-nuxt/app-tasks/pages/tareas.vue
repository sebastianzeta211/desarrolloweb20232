<template>
  <div class="ma-5">
 
    <TasksCreateDialog />

    <TasksTable />


  </div>
</template>
<!-- <template>
  <div>
    <h1>Gestión de tareas</h1>
    <p>Formulario para la gestión de tareas de los estudiantes.</p>

    <form action="javascript:void(0)" @submit="saveUser">

      <v-text-field label="Nombre" v-model="user.name" required placeholder="Ingrese su nombre" />

      <v-text-field label="Correo" v-model="user.email" type="email" placeholder="Ingrese su correo" />

      <v-textarea label="Descripción" v-model="user.description" cols="10" rows="3"></v-textarea>

      <v-checkbox v-model="user.conditions">
        <template v-slot:label>
          <a href="http://google.com" target="_blank">Acepta terminos y condiciones</a>
        </template>
      </v-checkbox>

      <label>Tipo de tarea</label>
      <v-radio-group v-model="user.type">
        <v-radio label="Actividad" value="typeA"></v-radio>
        <v-radio label="Tarea" value="typeB"></v-radio>
      </v-radio-group>

      <v-select @change="updatePeriod()" label="Semestre" v-model="user.period"
        :items="['Semestre 1', 'Semestre 2', 'Semestre 3']"></v-select>


      <v-btn type="submit">Enviar</v-btn>

    </form>

<div>

  <v-btn variant="outline-primary"  @click="gettasks()">Obtener tareas</v-btn>

 
</div>
<ul>
  
  <li v-for="task in tasks_" :key="task.id">
  {{ task.name}}

</li></ul>


  </div>
</template>
<script setup>
import axios from "axios";
const user = ref({ conditions: true, id: '1' })
const tasks_ = ref([])
const saveUser = async () => {
  console.log(user.value);
  const result = await axios.post("http://localhost:3001/tasks", user.value)
  console.log(result);
}
const updatePeriod = () => {
  console.log(user.value);
}
const gettasks= async() => {

  try{
    const result = await axios.get("http://localhost:3001/tasks")
   tasks_.value = result.data

  }catch(error){
    console.log(error);
  }
}
</script> -->