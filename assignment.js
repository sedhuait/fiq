/*
Implement a buffer with a put and get method such that
1) it is a FIFO buffer
2) Buffer size is fixed. No memory allocations in put or get methods.
3) On buffer full, put method overwrites oldest entry in the buffer
Buffer size is 3. Put(2), Put(4), Get() => 2 and Get() => 4
*/



class CustomBuffer {

    memory = [];
    readPtr = 0;
    writePtr = 0;
    count = 0;
    constructor(limit = 3)
    {
        this.limit = limit;
    }

    get(){
        const val = this.memory[this.readPtr];
        if(val){
            this.memory[this.readPtr] = null;
            this.readPtr++;
            this.count--;
            if(this.readPtr === this.limit)
            {
                this.readPtr = 0;
            }
            return val;
        }
        throw "No element in the memory";
    }

    put(element)
    {
        if (this.writePtr === this.limit) {
           this.count = this.limit - 1;
           this.writePtr = 0;
        }
        else if (this.count === this.limit)
        {
            this.count--;
        }
       if(this.count>0 && this.writePtr===this.readPtr)
       {
           this.readPtr++;
           if (this.readPtr === this.limit)
           {
               this.readPtr = 0;
           }
       }
       this.count++;
       this.memory[this.writePtr] = element;
       this.writePtr++;
    }


}
module.exports = CustomBuffer;
const buffer111 = new CustomBuffer(4);
        buffer111.put(2);
        buffer111.put(4);
        buffer111.put(6);
        buffer111.put(8);
        buffer111.put(10);
        buffer111.put(12);
        buffer111.put(14);
        buffer111.get();
        buffer111.get();
        buffer111.get();
        buffer111.get();
        buffer111.put(16);
        buffer111.get();