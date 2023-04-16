<?php

namespace App\Console;

use App\Console\Commands\DeleteChatAfterMidnight;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    
    protected $commands = [
        DeleteChatAfterMidnight::class
    ];

    protected function schedule(Schedule $schedule)
    {
        if(env('RUN_SCHEDULER')){
            $schedule->command('delete:chat')->daily();
        }
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
