import { Container } from '@mui/material';
import Typography from '@mui/material/Typography'
import { fontSize } from '@mui/system';


const Demo = ({

}) => {


    return (
        <Typography className='dm-com'>
            <Container>
                <div>
                    <h1 style={{
                        textAlign:'center',
                        fontSize:'26px',
                        fontWeight:'500',
                        
                        }}>Create Place</h1>
                    <form>
                    <input placeholder='name' type='text' name='name' />
                    <input placeholder='place' type='text' name='place' />
                    <input placeholder='imageUrl' type='text' name='imgUrl' />
                    <textarea placeholder='Description' type='text' name='description' ></textarea>
                    <th/>
                    <input  type='submit'  />
                    </form>
                </div>
            </Container>
        </Typography>

    );
};

function myStyles(){
    Typography:{
      
    }
}

export default Demo;