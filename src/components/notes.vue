<template>
	<main class="notes">
		<div class="addNote">
			<h1>Создайте свою заметку; )</h1>
			<div class="str">
				<label for="">Тема</label>
				<input type="text" v-model='elem.theme' placeholder="введите тему">
			</div>

			<div class="str">
				<label >Текст заметки</label>
			</div>
			<div class="str">
				<textarea name="" id="" cols="30" rows="10" v-model='elem.body' placeholder="введите текст">
					
				</textarea>
			</div>

			<div class="features">
				<button class="btn btn-primary" @click="Add">Добавить</button>
			</div>
		</div>
			
		<div class="list">
			<h1 class="sp">Ваши заметки</h1>
			<ul>
				<li v-for="(item,id) in notes" v-bind:key=id>
					<div class="headNote">
						<label><b>{{item.theme}}</b> </label><button class="btn btn-link" @click="Change(id)">Изменить</button>
						<button class="btn btn-link btn-delete" @click="Delete(id)">Удалить</button>
					</div>
					<p class="note">{{item.body}}<br><span class="date">{{item.date}}</span></p> 
					
				</li>
			</ul>
		</div>
	</main>
</template>

<script>
	export default{
		data(){
			return{
				elem:{
					theme:"",
					body:"",
					date: new Date().toLocaleString()
				},
				notes:[],
				editing:-1,
				cur_id:-1
			}
		},
		methods:{
			async Add(){
				if(!(this.elem.theme==""||this.elem.body=="")){
					if(this.editing===-1){
						this.notes.push({
							theme:this.elem.theme,
							body:this.elem.body,
							date: this.elem.date,
						});

						try{
							await this.$http
							.post("http://localhost:3000/notes/",this.elem);
							this.Update();
						}

						catch(err){
							console.error(err);
						}	
					}
					else{
						this.notes[this.editing]={
							id:this.elem.id,
							theme:this.elem.theme,
							body:this.elem.body,
							date: this.elem.date,
						}

						try{
							console.log(this.notes[this.editing]);
							await this.$http.put('http://localhost:3000/notes/'+ this.cur_id, this.notes[this.editing]);
							this.Update();
						}

						catch(err){
							console.error(err)
						}
						this.editing=-1;
					}
					this.elem.theme="";
					this.elem.body="";
					
				}
				else{
					alert('Поля должны быть заполнены!');
				}
			},
		/*Now(){
			var now = new Date();
			return now;
		},*/
		Change(id){
			this.elem={
				theme:this.notes[id].theme,
				body:this.notes[id].body,
				date: new Date().toLocaleString(),
			};
			this.cur_id=this.notes[id].id;
			this.editing=id;
		},

		async Delete(id){
			try{
				await this.$http
					.delete("http://localhost:3000/notes/"+this.notes[id].id);
					this.Update();
			}

			catch(err){
				console.error(err);
			}
			
		},

		async Update(){
			try{
					let res=await this.$http.get("http://localhost:3000/notes");
					this.notes=await res.json();
				}

			catch(err){
				console.error(err);
			}
		}
		},
		created(){
			this.Update();
		}
	}
</script>

<style>
.date{
	font-size:12px;
	color:darkgrey;
	font-weight:500;
}
.btn-delete{
	color:red;
}

label{
	margin:0;
	padding:6px 0px;;
}
	.headNote{
		display:flex;
		vertical-align: top;
	}

	input{
		margin-left: 15px;
	}

	.str{
		margin-top:10px;
	}

	.str>textarea{
		margin-top:-12px;
	}

	.features{
		margin-top:10px;
	}

	h1{
		font-size: 20px;
	}

	.addNote{
		margin-left:20px;
		margin-top:30px;
	}

	li{
		list-style-type: none;
	}

	.note{
		width:400px;
	}
	
	.list{
		margin-top:30px;
		margin-left:20px;
	}
</style>
