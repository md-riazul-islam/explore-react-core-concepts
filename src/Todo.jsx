export default function Todo({task, istry}){
    return(
        <div>
            <h3>Task- {istry ? 'Finished ' : 'work on'} :{task}</h3>
        </div>
    )
}